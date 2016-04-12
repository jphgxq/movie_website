package com.douban.crawler;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.douban.crawler.MyThread;

import dao.ShortReviewInfoDao;

public class ShortReviewCrawler {
	
	ShortReviewInfo srInfo;//�洢��������Ϣ
	ShortReviewInfoDao srdao;//�������ݿ�
	private int id;
	public ShortReviewCrawler() {
		// TODO Auto-generated constructor stub
	}
	
	public void crawlShortReview(String mid, String tab) throws ClassNotFoundException {
		srdao = new ShortReviewInfoDao();
		String url = "http://movie.douban.com/subject/25723907/comments?sort=new_score";
		Document doc = null;
		doc = this.getHtmlContent(url);
		this.getAndSaveReview(doc, mid, tab);//��ȡ�������������Ϣ
	}
	
	private void getAndSaveReview(Document doc, String mid, String tab) {
		// TODO Auto-generated method stub
		if (doc != null) {
			id = 1;
			this.extractReviewInfo(doc, tab);//��ȡ��һҳ����ҳ���еĶ�������Ϣ
			String url = "http://movie.douban.com/subject/25723907/comments";//׽���Ƕ�����ҳ����ʼ����
			url = url + doc.select("div[id=\"paginator\"]").select("a.next").attr("href");//�����һҳ������
			doc = this.getHtmlContent(url);
			try {
				//��ȡ��һҳ֮������ж�����ҳ��
				while (doc!=null && doc.select("div[id=\"paginator\"]").select("a").first().attr("data-page").equals("1")) {
					this.extractReviewInfo(doc, tab);
					url = "http://movie.douban.com/subject/25723907/comments";
					url = url + doc.select("div[id=\"paginator\"]").select("a.next").attr("href");
					doc = this.getHtmlContent(url);
					try {
						Thread.sleep(3*1000);
					} catch (InterruptedException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
						System.out.println("Error:"+e1.getMessage());
					}
				}
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		} else {
			System.err.println("The html is not fetched!");
		}
	}

	private void extractReviewInfo(Document doc, String tab) {
		// TODO Auto-generated method stub
		Elements srlist = doc.select("div.comment-item");//��ȡÿ�����۵�����
		for(Element element : srlist){
			srInfo = new ShortReviewInfo();
			srInfo.id = id + "";
			//data-cid
			srInfo.srid = element.attr("data-cid");
			//�������ǳ�
			srInfo.reviewer = element.select("span.comment-info").select("a").text();
			//�Ǽ�
			srInfo.rank = element.select("span.comment-info").select("span").attr("title");
			//�Ǽ�ת��
			srInfo.stars = Converter(srInfo.rank) + "";
			//��������
			srInfo.date = element.select("span.comment-info").select("span[class=\"\"]").text();
			//ͶƱ��
			srInfo.votes = element.select("span[class=\"votes pr5\"]").text();
			//����
			srInfo.comment = element.select("p").text();
			//д�����ݿ�
			srdao.insertShortReview(srInfo, tab);
			System.out.println("id, reviewer, rank" + ":" + id + "," + srInfo.reviewer + srInfo.rank);
			id++;
			//sleep ��ȡ10��һ������
			if (id%10 == 0) {
				try {
					Thread.sleep(1*1000);
				} catch (InterruptedException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
					System.out.println("Error:"+e1.getMessage());
				}
			}
		}
	}
	
	private int Converter(String rank){
		int stars = 0;

		System.out.println(rank.length()+" "+rank);
		if (rank.equals("����")) {
			stars = 50;
		}
		else if (rank.equals("�Ƽ�")) {
			stars = 40;
		}
		else if (rank.equals("����")) {
			stars = 30;
		}
		else if (rank.equals("�ϲ�")) {
			stars = 20;
		}
		else if (rank.equals("�ܲ�")) {
			stars = 10;
		}
		System.out.println(rank+" "+stars);

		return stars;
	}

	public Document getHtmlContent(String url){
		Document doc = null;
		while(true){
			try {
				doc = Jsoup.connect(url)
				.header("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36")
				.timeout(10*1000)
				.ignoreContentType(true)
				.get();
				break;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return doc;
	}
	
	public static void main(String[] args) {
		/*MyThread t = new MyThread("25853727", "pfshortreview");
		MyThread t2 = new MyThread("25723907", "zyjshortreview");
		t.start();
		t2.start();*/
		ShortReviewCrawler srCrawler = new ShortReviewCrawler();
		try {
			srCrawler.crawlShortReview("25723907", "movie_review");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

}

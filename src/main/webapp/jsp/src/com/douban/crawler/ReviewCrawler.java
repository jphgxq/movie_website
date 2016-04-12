package com.douban.crawler;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import dao.ReviewInfoDao;

public class ReviewCrawler {
	
	ReviewInfo rInfo;//�洢������Ϣ
	ReviewInfoDao rdao;//�������ݿ�
	private int id;
	public ReviewCrawler() {
		// TODO Auto-generated constructor stub
	}
	
	public void crawlReview(String mid, String tab) throws ClassNotFoundException {
		rdao = new ReviewInfoDao();
		String url = "http://movie.douban.com/subject/25723907/reviews";
		Document doc = null;
		doc = this.getHtmlContent(url);//��ȡ��վ����
		this.getAndSaveReview(doc, mid, tab);//��ȡ������������Ϣ
	}
	
	private void getAndSaveReview(Document doc, String mid, String tab) {
		// TODO Auto-generated method stub
		if (doc != null) {
			id = 1;
			this.extractReviewInfo(doc, tab);//��ȡ��һҳ����ҳ���е�������Ϣ
			String url = "http://movie.douban.com/subject/25723907/reviews";//׽��������ҳ����ʼ����
			url = url + doc.select("div[id=\"paginator\"]").select("a.next").attr("href");//�����һҳ������
			doc = this.getHtmlContent(url);
			//��ȡ��һҳ֮�����������ҳ��
			while (doc!=null && doc.select("div[id=\"paginator\"]").select("a").first().attr("data-page").equals("1")) {
				this.extractReviewInfo(doc, tab);
				url = "http://movie.douban.com/subject/25723907/reviews";
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
		} else {
			System.err.println("The html is not fetched!");
		}
	}

	private void extractReviewInfo(Document doc, String tab) {
		// TODO Auto-generated method stub
		Elements srlist = doc.select("div.review");
		for(Element element : srlist){
			rInfo = new ReviewInfo();
			try {
				rInfo.id = id + "";
				rInfo.reviewer = element.select("div.review-hd-info").select("a").text();
				rInfo.rank = element.select("div.review-hd-info").select("span").attr("title");
				rInfo.stars = Converter(rInfo.rank) + "";
				rInfo.time = element.select("div.review-hd-info").text().split(rInfo.reviewer)[1];
				rInfo.useful = element.select("div.review-full-ft-useful").select("span").first().select("em").text();
				if (rInfo.useful.equals("")) {
					rInfo.useful = "0";
				}
				rInfo.total = element.select("div.review-short-ft").select("span").text().split("/")[1];
				if (rInfo.total.equals("")) {
					rInfo.total = "0";
				}
				rInfo.reply = element.select("div.review-short-ft").select("a").text().split("�ظ�")[0];
				if (rInfo.reply.equals("")) {
					rInfo.reply = "0";
				}
				rInfo.url = element.select("div.review-hd").select("a[class=\"\"]").attr("href");
				rdao.insertReview(rInfo, tab);
				System.out.println("id, reviewer, time" + ":" + id + " " + rInfo.reviewer + " " + rInfo.time);
				id++;
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
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
		/*MyThread t = new MyThread("25853727", "pfreview");
		MyThread t2 = new MyThread("25723907", "zyjreview");
		t.start();
		t2.start();*/
		ReviewCrawler rCrawler = new ReviewCrawler();
		try {
			rCrawler.crawlReview("25723907", "zyjreview");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

}

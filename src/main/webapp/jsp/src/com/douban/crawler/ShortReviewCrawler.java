package com.douban.crawler;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.douban.crawler.MyThread;

import dao.ShortReviewInfoDao;

public class ShortReviewCrawler {
	
	ShortReviewInfo srInfo;//存储短评论信息
	ShortReviewInfoDao srdao;//连接数据库
	private int id;
	public ShortReviewCrawler() {
		// TODO Auto-generated constructor stub
	}
	
	public void crawlShortReview(String mid, String tab) throws ClassNotFoundException {
		srdao = new ShortReviewInfoDao();
		String url = "http://movie.douban.com/subject/25723907/comments?sort=new_score";
		Document doc = null;
		doc = this.getHtmlContent(url);
		this.getAndSaveReview(doc, mid, tab);//获取并保存短评论信息
	}
	
	private void getAndSaveReview(Document doc, String mid, String tab) {
		// TODO Auto-generated method stub
		if (doc != null) {
			id = 1;
			this.extractReviewInfo(doc, tab);//抽取第一页评论页面中的短评论信息
			String url = "http://movie.douban.com/subject/25723907/comments";//捉妖记短评论页面起始链接
			url = url + doc.select("div[id=\"paginator\"]").select("a.next").attr("href");//获得下一页的链接
			doc = this.getHtmlContent(url);
			try {
				//爬取第一页之后的所有短评论页面
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
		Elements srlist = doc.select("div.comment-item");//获取每条评论的内容
		for(Element element : srlist){
			srInfo = new ShortReviewInfo();
			srInfo.id = id + "";
			//data-cid
			srInfo.srid = element.attr("data-cid");
			//评论者昵称
			srInfo.reviewer = element.select("span.comment-info").select("a").text();
			//星级
			srInfo.rank = element.select("span.comment-info").select("span").attr("title");
			//星级转换
			srInfo.stars = Converter(srInfo.rank) + "";
			//评论日期
			srInfo.date = element.select("span.comment-info").select("span[class=\"\"]").text();
			//投票数
			srInfo.votes = element.select("span[class=\"votes pr5\"]").text();
			//评论
			srInfo.comment = element.select("p").text();
			//写入数据库
			srdao.insertShortReview(srInfo, tab);
			System.out.println("id, reviewer, rank" + ":" + id + "," + srInfo.reviewer + srInfo.rank);
			id++;
			//sleep 爬取10条一个周期
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
		if (rank.equals("力荐")) {
			stars = 50;
		}
		else if (rank.equals("推荐")) {
			stars = 40;
		}
		else if (rank.equals("还行")) {
			stars = 30;
		}
		else if (rank.equals("较差")) {
			stars = 20;
		}
		else if (rank.equals("很差")) {
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

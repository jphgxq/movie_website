package com.douban.crawler;

public class MyThread extends Thread {
	
	public MyThread(String mid, String tab) {
		run(mid, tab);
	}
	
	public void run(String mid, String tab) {
		ShortReviewCrawler srCrawler = new ShortReviewCrawler();
		try {
			srCrawler.crawlShortReview(mid, tab);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

}

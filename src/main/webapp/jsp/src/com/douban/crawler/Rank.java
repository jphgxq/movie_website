package com.douban.crawler;

public enum Rank {
	
	//"力荐", "推荐", "还行", "较差, 很差;
	a,b,c,d,e;
	public static Rank getRank(String rank) {
		return valueOf(rank.toLowerCase());
	}

}

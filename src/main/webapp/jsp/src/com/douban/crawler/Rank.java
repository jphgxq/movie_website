package com.douban.crawler;

public enum Rank {
	
	//"����", "�Ƽ�", "����", "�ϲ�, �ܲ�;
	a,b,c,d,e;
	public static Rank getRank(String rank) {
		return valueOf(rank.toLowerCase());
	}

}

package com.keystone.analytics.movie.dao;

import java.util.List;

import com.keystone.analytics.movie.model.MovieDisplayInfo;
import com.keystone.analytics.movie.model.MovieNum;
import com.keystone.analytics.movie.model.audienceMovie;
import com.keystone.analytics.movie.model.cityDisplay;
import com.keystone.analytics.movie.model.getTickets;
import com.keystone.analytics.movie.model.keyActor;
import com.keystone.analytics.movie.model.keyMovie;
import com.keystone.analytics.movie.model.monthTrend;
import com.keystone.analytics.movie.model.movieNews;
import com.keystone.analytics.movie.model.movieSum;
import com.keystone.analytics.movie.model.ticketHistory;
import com.keystone.analytics.movie.model.ticketMonth;
import com.keystone.analytics.movie.model.ticketWeek;
import com.keystone.analytics.movie.model.valuateMovie;
import com.keystone.analytics.movie.model.weekTrend;
import com.keystone.analytics.movie.model.year15PieInfo;

public interface MovieStatisDAO {
	
	public List<getTickets> getTickets ();

	public List<movieSum> getMovieSum();

	public List<String> getmovies();

	public List<MovieNum> getmovienum();

	public List<movieNews> getMovieNews();

	public List<ticketHistory> getTicketHistory();

	public List<ticketMonth> getTicketMonth();

	public List<ticketWeek> getTicketWeek();

	public List<monthTrend> getMonthTrend();

	public List<weekTrend> getWeekTrend();

	public List<MovieDisplayInfo> getDisplayMovieInfo();

	public List<cityDisplay> getCityDisplay();

	public List<keyMovie> getKeyDataMovie();

	public List<keyActor> getKeyDataActor();

	public List<year15PieInfo> getYear15InfoPie();

	public List<audienceMovie> getAudienceMovie();

	public List<valuateMovie> getValuationMovie();
	
}

package com.keystone.analytics.movie.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.keystone.analytics.movie.dao.MovieStatisDAO;
import com.keystone.analytics.movie.model.MovieDisplayInfo;
import com.keystone.analytics.movie.model.MovieNum;
import com.keystone.analytics.movie.model.audienceMovie;
import com.keystone.analytics.movie.model.cityDisplay;
import com.keystone.analytics.movie.model.getTickets;
import com.keystone.analytics.movie.model.keyActor;
import com.keystone.analytics.movie.model.keyMovie;
import com.keystone.analytics.movie.model.monthTrend;
import com.keystone.analytics.movie.model.movieDisplay;
import com.keystone.analytics.movie.model.movieNews;
import com.keystone.analytics.movie.model.movieSum;
import com.keystone.analytics.movie.model.nationalSum;
import com.keystone.analytics.movie.model.ticketHistory;
import com.keystone.analytics.movie.model.ticketMonth;
import com.keystone.analytics.movie.model.ticketWeek;
import com.keystone.analytics.movie.model.valuateMovie;
import com.keystone.analytics.movie.model.weekTrend;
import com.keystone.analytics.movie.model.year15PieInfo;
import com.keystone.analytics.movie.service.MovieStatisService;

@Service
public class MovieStatisServiceImpl implements MovieStatisService {
	
	@Autowired
	private MovieStatisDAO movieStatisDAO;
	
	@Override
	public List<getTickets> getTickets() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getTickets();
	}
	
	@Override
	public List<movieSum> getMovieSum() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getMovieSum();
	}
	
	@Override
	public List<nationalSum> getNationalSum() {
		// TODO Auto-generated method stub
		List<String> movies = movieStatisDAO.getmovies();
		HashMap<String, Integer> movienum = new HashMap<String, Integer>();
		List<MovieNum> movieNum = movieStatisDAO.getmovienum();
		for(int i=0;i<movieNum.size();i++){
			MovieNum num = movieNum.get(i);
			String name = num.getName();
			String display_percent = num.getDisplay_percent();
			String pro = name;
			float percent = Float.parseFloat(display_percent.substring(0,4));
			int percent_num = (int)percent;
			//if(movienum.containsKey(pro)){
				movienum.put(pro, percent_num);
			//}
		}
		
		List<nationalSum> result = new ArrayList<nationalSum>();
		for(Entry<String, Integer> entry : movienum.entrySet()){
			nationalSum p = new nationalSum();
			p.setName(entry.getKey());
			p.setValue(entry.getValue());
			result.add(p);
		}
		return result;
	}
	
	@Override
	public List<movieNews> getMovieNews() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getMovieNews();
	}
	
	@Override
	public List<ticketHistory> getTicketHistory() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getTicketHistory();
	}
	
	@Override
	public List<ticketMonth> getTicketMonth() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getTicketMonth();
	}
	
	@Override
	public List<ticketWeek> getTicketWeek() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getTicketWeek();
	}
	
	@Override
	public List<monthTrend> getMonthTrend() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getMonthTrend();
	}
	
	@Override
	public List<weekTrend> getWeekTrend() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getWeekTrend();
	}
	
	@Override
	public List<movieDisplay> getMovieDisplay() {
		// TODO Auto-generated method stub
		HashMap<String, Integer> moviedisplay = new HashMap<String, Integer>();
		List<MovieDisplayInfo> movieOnDisplay = movieStatisDAO.getDisplayMovieInfo();
		for(int i=0;i<movieOnDisplay.size();i++){
			MovieDisplayInfo num = movieOnDisplay.get(i);
			String name = num.getName();
			int movie_num = num.getMovie_num();
			moviedisplay.put(name, movie_num);
		}
		
		List<movieDisplay> result = new ArrayList<movieDisplay>();
		for(Entry<String, Integer> entry : moviedisplay.entrySet()){
			movieDisplay p = new movieDisplay();
			p.setName(entry.getKey());
			p.setValue(entry.getValue());
			result.add(p);
		}
		return result;
	}
	
	@Override
	public List<cityDisplay> getCityDisplay() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getCityDisplay();
	}
	
	@Override
	public List<keyMovie> getKeyDataMovie() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getKeyDataMovie();
	}
	
	@Override
	public List<keyActor> getKeyDataActor() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getKeyDataActor();
	}
	
	@Override
	public List<year15PieInfo> getYear15InfoPie() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getYear15InfoPie();
	}
	
	@Override
	public List<audienceMovie> getAudienceMovie() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getAudienceMovie();
	}
	
	@Override
	public List<valuateMovie> getValuationMovie() {
		// TODO Auto-generated method stub
		return movieStatisDAO.getValuationMovie();
	}

}

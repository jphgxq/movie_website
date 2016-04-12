package com.keystone.analytics.movie.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

@Controller
@RequestMapping("/")
public class MovieStatisCotroller {
	@Autowired
    MovieStatisService movieStatisService;
	
	@RequestMapping("getRealTimeTicket")
	@ResponseBody
	public Map<String, List<getTickets>> getRealTimeTicket() {
		List<getTickets> tics = new ArrayList<getTickets>();
		tics = movieStatisService.getTickets();
		Map<String, List<getTickets>> result = new HashMap<String, List<getTickets>>();
		result.put("tickets", tics);
		return result;
	}
	
	@RequestMapping("getMovieSum")
	@ResponseBody
	public Map<String, List<movieSum>> getMovieSum() {
		List<movieSum> sum = new ArrayList<movieSum>();
		sum = movieStatisService.getMovieSum();
		Map<String, List<movieSum>> result = new HashMap<String, List<movieSum>>();
		result.put("sums", sum);
		return result;
	}
	
	@RequestMapping("getNationalSum")
	@ResponseBody
	public Map<String, List<nationalSum>> getNationalSum() {
		List<nationalSum> sum = new ArrayList<nationalSum>();
		sum = movieStatisService.getNationalSum();
		Map<String, List<nationalSum>> result = new HashMap<String, List<nationalSum>>();
		result.put("nationalsums", sum);
		return result;
	}
	
	@RequestMapping("getMovieNews")
	@ResponseBody
	public Map<String, List<movieNews>> getMovieNews() {
		List<movieNews> news = new ArrayList<movieNews>();
		news = movieStatisService.getMovieNews();
		Map<String, List<movieNews>> result = new HashMap<String, List<movieNews>>();
		result.put("news", news);
		return result;
	}
	
	@RequestMapping("getTicketHistory")
	@ResponseBody
	public Map<String, List<ticketHistory>> getTicketHistory() {
		List<ticketHistory> tickets_history = new ArrayList<ticketHistory>();
		tickets_history = movieStatisService.getTicketHistory();
		Map<String, List<ticketHistory>> result = new HashMap<String, List<ticketHistory>>();
		result.put("tickets_history", tickets_history);
		return result;
	}
	
	@RequestMapping("getTicketMonth")
	@ResponseBody
	public Map<String, List<ticketMonth>> getTicketMonth() {
		List<ticketMonth> tickets_month = new ArrayList<ticketMonth>();
		tickets_month = movieStatisService.getTicketMonth();
		Map<String, List<ticketMonth>> result = new HashMap<String, List<ticketMonth>>();
		result.put("tickets_month", tickets_month);
		return result;
	}
	
	@RequestMapping("getTicketWeek")
	@ResponseBody
	public Map<String, List<ticketWeek>> getTicketWeek() {
		List<ticketWeek> tickets_week = new ArrayList<ticketWeek>();
		tickets_week = movieStatisService.getTicketWeek();
		Map<String, List<ticketWeek>> result = new HashMap<String, List<ticketWeek>>();
		result.put("tickets_week", tickets_week);
		return result;
	}
	
	@RequestMapping("getMonthTrend")
	@ResponseBody
	public Map<String, List<monthTrend>> getMonthTrend() {
		List<monthTrend> month_trend = new ArrayList<monthTrend>();
		month_trend = movieStatisService.getMonthTrend();
		Map<String, List<monthTrend>> result = new HashMap<String, List<monthTrend>>();
		result.put("month_trend", month_trend);
		return result;
	}
	
	@RequestMapping("getWeekTrend")
	@ResponseBody
	public Map<String, List<weekTrend>> getWeekTrend() {
		List<weekTrend> week_trend = new ArrayList<weekTrend>();
		week_trend = movieStatisService.getWeekTrend();
		Map<String, List<weekTrend>> result = new HashMap<String, List<weekTrend>>();
		result.put("week_trend", week_trend);
		return result;
	}
	
	@RequestMapping("getMovieDisplay")
	@ResponseBody
	public Map<String, List<movieDisplay>> getMovieDisplay() {
		List<movieDisplay> movie_display = new ArrayList<movieDisplay>();
		movie_display = movieStatisService.getMovieDisplay();
		Map<String, List<movieDisplay>> result = new HashMap<String, List<movieDisplay>>();
		result.put("movie_display", movie_display);
		return result;
	}
	
	@RequestMapping("getCityDisplay")
	@ResponseBody
	public Map<String, List<cityDisplay>> getCityDisplay() {
		List<cityDisplay> city_display = new ArrayList<cityDisplay>();
		city_display = movieStatisService.getCityDisplay();
		Map<String, List<cityDisplay>> result = new HashMap<String, List<cityDisplay>>();
		result.put("city_display", city_display);
		return result;
	}
	
	@RequestMapping("getKeyDataMovie")
	@ResponseBody
	public Map<String, List<keyMovie>> getKeyDataMovie() {
		List<keyMovie> keyMovie = new ArrayList<keyMovie>();
		keyMovie = movieStatisService.getKeyDataMovie();
		Map<String, List<keyMovie>> result = new HashMap<String, List<keyMovie>>();
		result.put("data", keyMovie);
		return result;
	}
	
	@RequestMapping("getKeyDataActor")
	@ResponseBody
	public Map<String, List<keyActor>> getKeyDataActor() {
		List<keyActor> keyActor = new ArrayList<keyActor>();
		keyActor = movieStatisService.getKeyDataActor();
		Map<String, List<keyActor>> result = new HashMap<String, List<keyActor>>();
		result.put("data", keyActor);
		return result;
	}
	
	@RequestMapping("getYear15InfoPie")
	@ResponseBody
	public Map<String, List<year15PieInfo>> getYear15InfoPie() {
		List<year15PieInfo> year15pie = new ArrayList<year15PieInfo>();
		year15pie = movieStatisService.getYear15InfoPie();
		Map<String, List<year15PieInfo>> result = new HashMap<String, List<year15PieInfo>>();
		result.put("year15pie", year15pie);
		return result;
	}
	
	@RequestMapping("getAudienceMovie")
	@ResponseBody
	public Map<String, List<audienceMovie>> getAudienceMovie() {
		List<audienceMovie> audience = new ArrayList<audienceMovie>();
		audience = movieStatisService.getAudienceMovie();
		Map<String, List<audienceMovie>> result = new HashMap<String, List<audienceMovie>>();
		result.put("audience", audience);
		return result;
	}
	
	@RequestMapping("getValuationMovie")
	@ResponseBody
	public Map<String, List<valuateMovie>> getValuationMovie() {
		List<valuateMovie> valuate = new ArrayList<valuateMovie>();
		valuate = movieStatisService.getValuationMovie();
		Map<String, List<valuateMovie>> result = new HashMap<String, List<valuateMovie>>();
		result.put("valuate", valuate);
		return result;
	}
    
}

package com.keystone.analytics.movie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
	@RequestMapping("login")
	public String login(){
	    return "login";
	}
	 
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    
    @RequestMapping("category")
    public String category(){
    	return "category";
    }
    
    @RequestMapping("actors")
    public String actors(){
    	return "actors";
    }
    
    @RequestMapping("keydata")
    public String keydata(){
    	return "keydata";
    }
    
    @RequestMapping("report")
    public String report(){
    	return "report";
    }
    
    @RequestMapping("userdata")
    public String userdata(){
    	return "userdata";
    }
    
    @RequestMapping("connectus")
    public String connectus(){
    	return "connectus";
    }
}

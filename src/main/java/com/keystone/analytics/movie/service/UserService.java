package com.keystone.analytics.movie.service;

import com.keystone.analytics.movie.model.User;

public interface UserService {
	 public int insertUser(User user);
	 
	 public int selectUser(User user);
}

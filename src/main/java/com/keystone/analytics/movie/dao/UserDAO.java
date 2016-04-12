package com.keystone.analytics.movie.dao;

import com.keystone.analytics.movie.model.User;

public interface UserDAO {
	/**
     * 添加新用户
     * @param user
     * @return
     */
    public int insertUser(User user);
    
    public int selectUser(User user);
}

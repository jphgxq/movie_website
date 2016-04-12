package dao;

import java.sql.SQLException;

import com.douban.crawler.ReviewInfo;
import com.mysql.jdbc.PreparedStatement;

public class ReviewInfoDao extends Dao {

	public ReviewInfoDao() throws ClassNotFoundException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int insertReview(ReviewInfo rInfo, String tab){
		int status = -1;
		String insertData = "insert into " + tab + "(id, reviewer, rank, stars, time, useful, total, reply, url)values(?,?,?,?,?,?,?,?,?)";
		try {
			PreparedStatement pstmt = (PreparedStatement) conn.prepareStatement(insertData);
			conn.setAutoCommit(false);
			pstmt.setString(1, rInfo.id);
			pstmt.setString(2, rInfo.reviewer);
			pstmt.setString(3, rInfo.rank); 
			pstmt.setString(4, rInfo.stars);
			pstmt.setString(5, rInfo.time);
			pstmt.setString(6, rInfo.useful);
			pstmt.setString(7, rInfo.total);
			pstmt.setString(8, rInfo.reply);
			pstmt.setString(9, rInfo.url);
			status = pstmt.executeUpdate();
			conn.commit();
			pstmt.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.err.println("Cannot insert info into table " + tab);
		}
		return status;
	}

}

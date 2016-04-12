package dao;

import java.sql.SQLException;

import com.mysql.jdbc.PreparedStatement;
import com.douban.crawler.ShortReviewInfo;

public class ShortReviewInfoDao extends Dao {

	public ShortReviewInfoDao() throws ClassNotFoundException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int insertShortReview(ShortReviewInfo srInfo, String tab){
		int status = -1;
		String insertData = "insert into " + tab + "(id, srid, reviewer, rank, stars, date, votes, comment)values(?,?,?,?,?,?,?,?)";
		try {
			PreparedStatement pstmt = (PreparedStatement) conn.prepareStatement(insertData);
			conn.setAutoCommit(false);
			pstmt.setString(1, srInfo.id);
			pstmt.setString(2, srInfo.srid);
			pstmt.setString(3, srInfo.reviewer); 
			pstmt.setString(4, srInfo.rank);
			pstmt.setString(5, srInfo.stars);
			pstmt.setString(6, srInfo.date);
			pstmt.setString(7, srInfo.votes);
			pstmt.setString(8, srInfo.comment);
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

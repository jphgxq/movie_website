package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.mysql.jdbc.PreparedStatement;
import com.mysql.jdbc.Statement;

import db.MYSQLDB;

public class Dao {
	
	protected Connection conn = null;
	ResultSet rs = null;
	
	public Dao() throws ClassNotFoundException {
		MYSQLDB mydb = new MYSQLDB();
		mydb.startDBConnection();
		conn = mydb.getConnection();
	}
	
	public Dao(Connection conn) {
		this.conn = conn;
	}
	
	public ArrayList<String> showTables() throws SQLException {
		ArrayList<String> tableList = new ArrayList<String>();
		String showTable = "select * from tab";
		Statement stmt = (Statement) conn.createStatement();
		rs = stmt.executeQuery(showTable);
		String tableName="";
		while(rs.next()){
			tableName = rs.getString(1);
			System.out.println("Table Name: " + tableName);
			if(tableName.contains("==")){
				continue;
			}else{
				tableList.add(tableName);
			}
		}
		return tableList;
	}
	
	public ArrayList<Map<String, String>> getResult(String queryString) {
		ArrayList<Map<String, String>> list = new ArrayList<Map<String,String>>();
		PreparedStatement pstmt;
		try {
			pstmt = (PreparedStatement) conn.prepareStatement(queryString);
			rs = pstmt.executeQuery();
			java.sql.ResultSetMetaData metaData = rs.getMetaData();
			int colsLen = metaData.getColumnCount();
			while (rs.next()) {
				Map<String, String> map = new HashMap<String, String>();
				for (int i = 0; i < colsLen; i++) {
					String colName = metaData.getColumnName(i);
					String colVal = rs.getString(colName);
					map.put(colName, colVal);
				}
				list.add(map);
			}
			pstmt.close();
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public void disConnect() {
		if (this.conn!=null) {
			try {
				conn.close();
			} catch ( SQLException e) {
				// TODO: handle exception
			}finally{
				conn=null;
			}
		}
	}

}

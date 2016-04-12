<%@ page language="java" import="java.util.*, com.keystone.analytics.movie.model.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String spath = request.getServletPath();

//String uri = request.getRequestURI();
String userlogin=(String)(session.getAttribute("username"));
int sessionNum = 0;
if (userlogin==null || userlogin.equals("")){
	response.sendRedirect("login.action");
return;
}

%>
<h3 class="navbar navbar-default text-muted" style="color:#377BB5;font-weight:bold;padding-top:5px;margin-top:10px;margin-bottom:10px;padding-left:23.5%;">电影数据采集分析系统</h3>
<div class="blog-masthead">
 <div class="container">
    <nav class="blog-nav">
     <a class="<%if (spath.equals("/jsp/index.jsp")){%>active<%} %> blog-nav-item" href="index.action">首页</a>
     <a class="<%if (spath.equals("/jsp/category.jsp")){%>active<%} %> blog-nav-item" href="category.action">影片实时数据</a>
     <a class="<%if (spath.equals("/jsp/actors.jsp")){%>active<%} %> blog-nav-item" href="actors.action">影人实时数据</a>
     <a class="<%if (spath.equals("/jsp/keydata.jsp")){%>active<%} %> blog-nav-item" href="keydata.action">Keydata资料库</a>
     <a class="<%if (spath.equals("/jsp/report.jsp")){%>active<%} %> blog-nav-item" href="report.action">报告生成</a>
     <a class="<%if (spath.equals("/jsp/userdata.jsp")){%>active<%} %> blog-nav-item" href="userdata.action">用户数据源配置</a>
     <a class="<%if (spath.equals("/jsp/connectus.jsp")){%>active<%} %> blog-nav-item" href="connectus.action">联系keydata</a>
      <span style="color:#F1A625;margin-right:5px;">欢迎你! &nbsp;<%=(String) session.getAttribute("username")%></span>
	 <input type="button" onclick="logout()"
	            value="退出">
   </nav>
 </div>
</div>
<script>
function logout(){
	$.ajax({
		 type: "POST",
         url: "logout.action",
         dataType: "json",
         async: false,
         success: function(data){
        	 if(data.success==1){
        		 window.location = "login.action";
        	 }
              }
	});
} 

</script>
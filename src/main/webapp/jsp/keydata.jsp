<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>电影数据采集分析系统</title>
    <!-- Bootstrap -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
	<link href="css/global.css" rel="stylesheet">
	 <link rel="stylesheet" type="text/css" href="http://cdn.datatables.net/1.10.7/css/jquery.dataTables.css">
 
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script> 
    <script src="highcharts/js/highcharts.js"></script>
 <!--    <script src="highcharts/js/modules/exporting.js" type="text/javascript"></script>  
     -->
<!--     <script src="https://code.highcharts.com/maps/highmaps.js"></script> -->
    <script src="//code.highcharts.com/maps/modules/map.js"></script>
	<script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/mapdata/countries/cn/cn-all.js"></script>

    <script type="text/javascript" src="js/index.js"></script>
    
    <script src="http://cdn.datatables.net/1.10.7/js/jquery.dataTables.js"></script>
    
    <script type="text/javascript" src="js/keydata.js"></script>
  </head>
  <body>
  
	 <%@ include file="common/head.jsp" %>
     <div class="container" style="margin-top:10px;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-left" id="tabs-42902">
					<ul class="nav nav-tabs" style="border:1px solid #ddd;">
						<li class="active">
							<a data-toggle="tab" href="#panel-1"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影片资料&nbsp;&nbsp;</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-2"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影人资料&nbsp;&nbsp;</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1">
							<ul class="nav nav-pills">
								<li role="presentation" class="active"><a href="#allmovie-info">全部</a></li>
								<!--  <li role="presentation"><a href="#">A</a></li>
								<li role="presentation"><a href="#">B</a></li>
								<li role="presentation"><a href="#">C</a></li>
								<li role="presentation"><a href="#">D</a></li>
								<li role="presentation"><a href="#">E</a></li>
								<li role="presentation"><a href="#">F</a></li>
								<li role="presentation"><a href="#">G</a></li>
								<li role="presentation"><a href="#">H</a></li>
								<li role="presentation"><a href="#">I</a></li>
								<li role="presentation"><a href="#">J</a></li>
								<li role="presentation"><a href="#">K</a></li>
								<li role="presentation"><a href="#">L</a></li>
								<li role="presentation"><a href="#">M</a></li>
								<li role="presentation"><a href="#">N</a></li>
								<li role="presentation"><a href="#">O</a></li>
								<li role="presentation"><a href="#">P</a></li>
								<li role="presentation"><a href="#">Q</a></li>
								<li role="presentation"><a href="#">R</a></li>
								<li role="presentation"><a href="#">S</a></li>
								<li role="presentation"><a href="#">T</a></li>
								<li role="presentation"><a href="#">U</a></li>
								<li role="presentation"><a href="#">V</a></li>
								<li role="presentation"><a href="#">W</a></li>
								<li role="presentation"><a href="#">X</a></li>
								<li role="presentation"><a href="#">Y</a></li>
								<li role="presentation"><a href="#">Z</a></li> -->
							</ul>
							<h4 style="margin-top: 20px"><strong>影片基本属性</strong></h4>
							<table id="allmovie-info" class="display" cellspacing="0">
								<thead>
									<tr>
										<th>电影名</th>
										<th>导演</th>
										<th>编剧</th>
										<th>主演</th>
										<th>类型</th>
										<th>上映日期</th>
										<th>时长</th>
										<th>获奖情况</th>
										<th>评分</th>
									</tr>
								</thead>
								
								<tfoot>
									<tr>
										<th>电影名</th>
										<th>导演</th>
										<th>编剧</th>
										<th>主演</th>
										<th>类型</th>
										<th>上映日期</th>
										<th>时长</th>
										<th>获奖情况</th>
										<th>评分</th>
									</tr>
								</tfoot>
							</table>
							<div class="row-fluid" style="margin-top: 10px">
								<img src="http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2298326979.jpg" class="col-md-2">
								<div class="col-md-10">
									<p><strong>恶棍天使</strong></p>
									<p>导演： 俞白眉/邓超</p>
									<p>主演：  邓超 / 孙俪 / 代乐乐 / 梁超 / 杨新鸣</p>
									<p>类型：  喜剧</p>
									<p>地区：  中国大陆</p>
									<p>上映时间： 2015-12-24(中国大陆)</p>
									<p>时长： 124分钟</p>
									<p>剧情：  查小刀（孙俪 饰）智商极高，但性格软弱怕事，莫非里（邓超 饰）不过是一介混混，但个性嚣张跋扈，一场车祸让两人相遇，莫非里毫无意外的狠狠在查小刀的身上诈了一笔。亲情淡漠，工作受挫，又遭恶人欺压，查小刀心灰意冷，无意之中得知了有一位名为折耳根（梁超 饰）的神医专治各种疑难杂症，于是便起了向他寻求良方的念头。 </p>
									<p>获奖情况：  暂无相关信息</p>
									<p>评分：  3.9</p>
								</div>
							</div>
							<!-- <h4 style="margin-top: 20px"><strong>概述</strong></h4>
							<h4 style="margin-top: 20px"><strong>票房曲线图</strong></h4>
							<h4 style="margin-top: 20px"><strong>排片曲线图</strong></h4>
							<h4 style="margin-top: 20px"><strong>观众属性特征</strong></h4>
							<h4 style="margin-top: 20px"><strong>观众评论热点</strong></h4>
							<h4 style="margin-top: 20px"><strong>营销事件</strong></h4> -->
						</div>
						<div class="tab-pane" id="panel-2">
							<ul class="nav nav-pills">
								<li role="presentation" class="active"><a href="#allactors-info">全部</a></li>
								<!-- <li role="presentation"><a href="#">A</a></li>
								<li role="presentation"><a href="#">B</a></li>
								<li role="presentation"><a href="#">C</a></li>
								<li role="presentation"><a href="#">D</a></li>
								<li role="presentation"><a href="#">E</a></li>
								<li role="presentation"><a href="#">F</a></li>
								<li role="presentation"><a href="#">G</a></li>
								<li role="presentation"><a href="#">H</a></li>
								<li role="presentation"><a href="#">I</a></li>
								<li role="presentation"><a href="#">J</a></li>
								<li role="presentation"><a href="#">K</a></li>
								<li role="presentation"><a href="#">L</a></li>
								<li role="presentation"><a href="#">M</a></li>
								<li role="presentation"><a href="#">N</a></li>
								<li role="presentation"><a href="#">O</a></li>
								<li role="presentation"><a href="#">P</a></li>
								<li role="presentation"><a href="#">Q</a></li>
								<li role="presentation"><a href="#">R</a></li>
								<li role="presentation"><a href="#">S</a></li>
								<li role="presentation"><a href="#">T</a></li>
								<li role="presentation"><a href="#">U</a></li>
								<li role="presentation"><a href="#">V</a></li>
								<li role="presentation"><a href="#">W</a></li>
								<li role="presentation"><a href="#">X</a></li>
								<li role="presentation"><a href="#">Y</a></li>
								<li role="presentation"><a href="#">Z</a></li> -->
							</ul>
							<h4 style="margin-top: 20px"><strong>影人基本属性</strong></h4>
							<table id="allactors-info" class="display" cellspacing="0">
								<thead>
									<tr>
										<th>姓名</th>
										<th>基本信息</th>
										<th>获奖情况</th>
										<th>最近作品</th>
										<th>代表作品</th>
										<th>最近合作者</th>
									</tr>
								</thead>
								
								<tfoot>
									<tr>
										<th>姓名</th>
										<th>基本信息</th>
										<th>获奖情况</th>
										<th>最近作品</th>
										<th>代表作品</th>
										<th>最近合作者</th>
									</tr>
								</tfoot>
							</table>
							<div class="row-fluid" style="margin-top: 10px">
								<img src="http://img3.douban.com/img/celebrity/medium/1375081883.31.jpg" class="col-md-2">
								<div class="col-md-10">
									<p><strong>安迪·瑟金斯 Andy Serkis</strong></p>
									<p>性别： 男</p>
									<p>星座： 白羊座</p>
									<p>出生日期： 1964-04-20</p>
									<p>出生地：   英国,伦敦,赖斯利普</p>
									<p>职业： 演员 / 副导演 / 导演 / 制片</p>
								</div>
							</div>
							<!-- <h4 style="margin-top: 20px"><strong>概述</strong></h4>
							<h4 style="margin-top: 20px"><strong>作品</strong></h4>
							<h4 style="margin-top: 20px"><strong>关联度较高的影人</strong></h4>
							<h4 style="margin-top: 20px"><strong>影人粉丝特征</strong></h4>
							<h4 style="margin-top: 20px"><strong>影人动态追踪</strong></h4> -->
						</div>
						
					</div>
				</div>

			</div>
		</div>
	</div>

     


	<%@ include file="common/foot.jsp" %>
	<!-- <script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script> -->
    <script src="bootstrap/js/bootstrap.min.js"></script> 
	<script src="echarts/build/dist/echarts.js"></script>

    <script type="text/javascript" src="js/index.js"></script>

  </body>
</html>
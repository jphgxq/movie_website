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
  </head>
  <body>
  
	 <%@ include file="common/head.jsp" %>
     <div class="container" style="margin-top:10px;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-left" id="tabs-42902">
					<ul class="nav nav-tabs" style="border:1px solid #ddd;">
						<li class="active">
							<a data-toggle="tab" href="#panel-1"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影人关联分析</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-2"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影人动态追踪</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-3"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影人粉丝特征</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-4"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影人微博扩散特征</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1" style="border: 1px solid #ddd">
							<div id="relation" style="width: 900px; height:500px"></div>
							<h4 style="margin: 10px"><strong>其中较具影响力的影人有：</strong></h4>
							<table class="table table-hover">
								<thead>
									<tr>
										<td>
											<strong>影人</strong>
										</td>
										<td>
											<strong>最适合的搭档</strong>
										</td>
										<td>
											<strong>关联度</strong>
										</td>
										<td>
											<strong>其他</strong>
										</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											冯小刚
										</td>
										<td>
											王宝强
										</td>
										<td>
											5
										</td>
										<td>
											
										</td>
									</tr>
									<tr>
										<td>
											黎明
										</td>
										<td>
											曾志伟
										</td>
										<td>
											2
										</td>
										<td>
											
										</td>
									</tr>
									<tr>
										<td>
											刘德华
										</td>
										<td>
											王晶
										</td>
										<td>
											6
										</td>
										<td>
											
										</td>
									</tr>
									<tr>
										<td>
											成奎安
										</td>
										<td>
											李修贤
										</td>
										<td>
											6
										</td>
										<td>
											
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="tab-pane" id="panel-2">
							<h4><strong>指数趋势</strong></h4>
							<div style="border: 1px solid #ddd">
								<ul class="nav nav-tabs">
									<li class="active"><a data-toggle="tab" href="#"><span class="glyphicon glyphicon-time" aria-hidden="true"></span>整体趋势</a></li>
									<li><a data-toggle="tab" href="#"><span class="glyphicon glyphicon-blackboard" aria-hidden="true"></span>PC趋势</a></li>
									<li><a data-toggle="tab" href="#"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>移动趋势</a></li>
								</ul>
								<div id="actor-trend" style="width: 900px; height:500px"></div>
							</div>
							<h4 style="margin-top: 20px"><strong>最近一周总体热度趋势</strong></h4>
							<h4 style="margin-top: 20px"><strong>最近正负面消息对比</strong></h4>
							<h4 style="margin-top: 20px"><strong>需求图谱</strong></h4>
						</div>
						<div class="tab-pane" id="panel-3">
							<div class="panel panel-default" style="border:1px solid #ddd;">
								<h4><strong>地域分布</strong></h4>
								<div id="fan-area" style="width: 900px; height: 500px"></div>
							</div>
							<div style="margin-top: 20px; border:1px solid #ddd;">
								<h4><strong>人群属性</strong></h4>
								<div class="row-fluid">
									<div id="fan-age" class="col-md-6" style="width: 450px; height: 250px"></div>
									<div id="fan-sex" class="col-md-6" style="width: 450px; height: 250px"></div>
								</div>
							</div>
							<div id="fan-business" style="width: 900px; height: 500px; margin-top: 20px">
							</div>
						</div>
						<div class="tab-pane" id="panel-4">
							<div id="actor-blog" style="width: 900px; height: 500px; border:1px solid #ddd; overflow:hidden"></div>
							<h4 style="margin-top: 20px"><strong>其中较具影响力的粉丝为：</strong></h4>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

     


	<%@ include file="common/foot.jsp" %>
	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 
	<script src="echarts/build/dist/echarts.js"></script>

    <script type="text/javascript" src="js/index.js"></script> 
    <script type="text/javascript" src="js/actors/relation.js"></script> 
    <script type="text/javascript" src="js/actors/actor_trend.js"></script> 
    <script type="text/javascript" src="js/actors/fan_feature.js"></script> 
    <script type="text/javascript" src="js/actors/actor_blog.js"></script> 

  </body>
</html>
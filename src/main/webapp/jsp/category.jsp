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

	<%@ include file="common/head.jsp"%>
	<div class="container" style="margin-top:10px;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-left" id="tabs-42902">
					<ul class="nav nav-tabs" style="border:1px solid #ddd;">
						<li class="active"><a data-toggle="tab" href="#panel-1"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;票房排行榜</a></li>
						<li><a data-toggle="tab" href="#panel-2"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;票房趋势</a></li>
						<li><a data-toggle="tab" href="#panel-3"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;排片详情</a></li>
						<li><a data-toggle="tab" href="#panel-4" onclick="time_pie()"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;影片档期与类型关系</a></li>
						<li><a data-toggle="tab" href="#panel-5" onclick="audience()"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片观众特征</a></li>
						<li><a data-toggle="tab" href="#panel-6"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片评论分析</a></li>
						<li><a data-toggle="tab" href="#panel-7"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片微博扩散特征</a></li>
						<li><a data-toggle="tab" href="#panel-8" onclick="valuation()"><span
								class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;热门影片票房强度量化</a></li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#ticket-1">历史票房</a></li>
								<li><a data-toggle="tab" href="#ticket-2">当月票房</a></li>
								<li><a data-toggle="tab" href="#ticket-3">本周票房</a></li>
							</ul>
							<div class="tab-content">
								<div id="ticket-1" class="tab-pane active">
									<table class="table table-hover">
										<thead>
											<tr>
												<td><strong>历史排名：电影名</strong></td>
												<td><strong>类型</strong></td>
												<td><strong>年份</strong></td>
												<td><strong>总票房（万）</strong></td>
												<td><strong>平均票价</strong></td>
												<td><strong>场均人次</strong></td>
												<td><strong>国家及地区</strong></td>
												<td><strong>上映日期</strong></td>
											</tr>
										</thead>
										<tbody id="tickets_history">

										</tbody>
									</table>
								</div>
								<div id="ticket-2" class="tab-pane">
									<table class="table table-hover">
										<thead>
											<tr>
												<td><strong>本月排名</strong></td>
												<td><strong>电影名</strong></td>
												<td><strong>月内天数</strong></td>
												<td><strong>单月票房（万）</strong></td>
												<td><strong>平均票价</strong></td>
												<td><strong>场均人次</strong></td>
												<td><strong>月度占比</strong></td>
												<td><strong>上映时间</strong></td>
												<td><strong>口碑指数</strong></td>
											</tr>
										</thead>
										<tbody id="tickets_month">

										</tbody>
									</table>
								</div>
								<div id="ticket-3" class="tab-pane">
									<table class="table table-hover">
										<thead>
											<tr>
												<td><strong>本周排名</strong></td>
												<td><strong>电影名</strong></td>
												<td><strong>单周票房（万）</strong></td>
												<td><strong>总票房（万）</strong></td>
												<td><strong>上映天数</strong></td>
												<td><strong>平均票价</strong></td>
												<td><strong>场均人次</strong></td>
												<td><strong>口碑指数</strong></td>
											</tr>
										</thead>
										<tbody id="tickets_week">

										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-2">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#trend-1">历史票房趋势</a></li>
								<li><a data-toggle="tab" href="#trend-2"
									onclick="trend_month()">月票房趋势</a></li>
								<li><a data-toggle="tab" href="#trend-3"
									onclick="trend_week()">本周票房趋势</a></li>
								<li><a data-toggle="tab" href="#trend-4"
									onclick="trend_hot()">热映票房趋势</a></li>
							</ul>
							<div class="tab-content">
								<div id="trend-1" class="tab-pane active"
									style="width: 900px; height:500px"></div>
								<div id="trend-2" class="tab-pane"
									style="width: 900px; height:500px"></div>
								<div id="trend-3" class="tab-pane"
									style="width: 900px; height:500px"></div>
								<div id="trend-4" class="tab-pane"
									style="width: 900px; height:500px"></div>
							</div>
						</div>
						<div class="tab-pane" id="panel-3">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#info-1">实时排片详情</a></li>
								<li><a data-toggle="tab" href="#info-2"
									onclick="trend_analysis()">排片趋势</a></li>
							</ul>
							<div class="tab-content">
								<div id="info-1" class="tab-pane active">
									<div id="info-pie" style="width: 900px; height:500px"></div>
									<table class="table table-hover">
										<thead>
											<tr>
												<td><strong>影片名称</strong></td>
												<td><strong>总场次（万）</strong></td>
												<td><strong>排片占比</strong></td>
												<td><strong>认知指数</strong></td>
												<td><strong>购票指数</strong></td>
												<td><strong>口碑指数</strong></td>
											</tr>
										</thead>
										<tbody id="cityDisplay">
										</tbody>
									</table>
								</div>
								<div id="info-2" class="tab-pane">
									<div id="info-line" style="width: 900px; height:500px"></div>
									<table class="table table-hover">
										<thead>
											<tr>
												<td></td>
												<td><strong>2月18日</strong></td>
												<td><strong>2月19日</strong></td>
												<td><strong>2月20日</strong></td>
												<td><strong>2月21日</strong></td>
												<td><strong>2月22日</strong></td>
												<td><strong>2月23日</strong></td>
												<td><strong>2月24日</strong></td>
												<td><strong>2月25日</strong></td>
												<td><strong>2月26日</strong></td>
												<td><strong>2月27日</strong></td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>全国</td>
												<td>194237</td>
												<td>200335</td>
												<td>198556</td>
												<td>200495</td>
												<td>203577</td>
												<td>210143</td>
												<td>217550</td>
												<td>218839</td>
												<td>214666</td>
												<td>210246</td>
											</tr>
											<tr>
												<td>美人鱼</td>
												<td>75741</td>
												<td>63828</td>
												<td>66654</td>
												<td>67689</td>
												<td>67234</td>
												<td>65603</td>
												<td>65013</td>
												<td>64113</td>
												<td>58129</td>
												<td>56870</td>
											</tr>
											<tr>
												<td>卧虎藏龙：青冥宝剑</td>
												<td>1498</td>
												<td>49439</td>
												<td>45840</td>
												<td>42505</td>
												<td>38989</td>
												<td>35890</td>
												<td>34300</td>
												<td>32567</td>
												<td>22926</td>
												<td>21270</td>
											</tr>
											<tr>
												<td>西游记之孙悟空三打白骨精</td>
												<td>35483</td>
												<td>24617</td>
												<td>25176</td>
												<td>25964</td>
												<td>26955</td>
												<td>27796</td>
												<td>27902</td>
												<td>27602</td>
												<td>22974</td>
												<td>22225</td>
											</tr>
											<tr>
												<td>澳门风云3</td>
												<td>32822</td>
												<td>22529</td>
												<td>22781</td>
												<td>22940</td>
												<td>23262</td>
												<td>23784</td>
												<td>23989</td>
												<td>23690</td>
												<td>17931</td>
												<td>17234</td>
											</tr>
											<tr>
												<td>火影忍者剧场版：博人传</td>
												<td>29631</td>
												<td>21368</td>
												<td>20749</td>
												<td>19885</td>
												<td>18291</td>
												<td>16449</td>
												<td>15790</td>
												<td>14888</td>
												<td>7364</td>
												<td>7850</td>
											</tr>
											<tr>
												<td>功夫熊猫3</td>
												<td>13453</td>
												<td>9446</td>
												<td>10983</td>
												<td>12073</td>
												<td>11851</td>
												<td>11607</td>
												<td>11328</td>
												<td>11028</td>
												<td>7811</td>
												<td>9837</td>
											</tr>
											<tr>
												<td>高跟鞋先生</td>
												<td>11862</td>
												<td>6812</td>
												<td>7262</td>
												<td>7797</td>
												<td>8324</td>
												<td>9147</td>
												<td>9827</td>
												<td>10033</td>
												<td>6671</td>
												<td>6854</td>
											</tr>
											<tr>
												<td>圣斗士星矢：圣域传说</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td>2</td>
												<td>3</td>
												<td></td>
												<td>151</td>
												<td>27223</td>
												<td>24985</td>
											</tr>
											<tr>
												<td>末日迷踪</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td>1</td>
												<td>2</td>
												<td></td>
												<td>126</td>
												<td>20184</td>
												<td>17636</td>
											</tr>
											<tr>
												<td>托马斯和朋友们多多岛之迷失宝藏</td>
												<td>1</td>
												<td>7</td>
												<td>6298</td>
												<td>6684</td>
												<td>5230</td>
												<td>4320</td>
												<td>3853</td>
												<td>3420</td>
												<td>1568</td>
												<td>3055</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-4">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#2016">2016</a></li>
								<li><a data-toggle="tab" href="#2015">2015</a></li>
								<li><a data-toggle="tab" href="#2014">2014</a></li>
								<li><a data-toggle="tab" href="#2013">2013</a></li>
							</ul>
							<div class="tab-content">
								<div id="2016" class="tab-pane active">
									<ul class="nav nav-tabs">
										<li class="active"><a data-toggle="tab" href="#2016year">贺岁档</a></li>
										<li><a data-toggle="tab" href="#2016work" onclick="work16pie()">劳动节档</a></li>
										<li><a data-toggle="tab" href="#2016summer" onclick="summer16pie()">暑期档</a></li>
										<li><a data-toggle="tab" href="#2016nation" onclick="nation16pie()">国庆档</a></li>
										<li><a data-toggle="tab" href="#2016other" onclick="other16pie()">其他档</a></li>
									</ul>
									<div class="tab-content">
										<div id="2016year" class="tab-pane active">
											<div id="16yeartime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="16yeartime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2016work" class="tab-pane">
											<div id="16worktime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="16worktime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2016summer" class="tab-pane">
											<div id="16summertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="16summertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2016nation" class="tab-pane">
											<div id="16nationtime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="16nationtime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2016other" class="tab-pane">
											<div id="16othertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="16othertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
									</div>
								</div>
								<div id="2015" class="tab-pane">
									<ul class="nav nav-tabs">
										<li class="active"><a data-toggle="tab" href="#2015year">贺岁档</a></li>
										<li><a data-toggle="tab" href="#2015work"
											onclick="work15pie()">劳动节档</a></li>
										<li><a data-toggle="tab" href="#2015summer"
											onclick="summer15pie()">暑期档</a></li>
										<li><a data-toggle="tab" href="#2015nation"
											onclick="nation15pie()">国庆档</a></li>
										<li><a data-toggle="tab" href="#2015other"
											onclick="other15pie()">其他档</a></li>
									</ul>
									<div class="tab-content">
										<div id="2015year" class="tab-pane active">
											<div id="15yeartime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="15yeartime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2015work" class="tab-pane">
											<div id="15worktime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="15worktime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2015summer" class="tab-pane">
											<div id="15summertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="15summertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2015nation" class="tab-pane">
											<div id="15nationtime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="15nationtime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2015other" class="tab-pane">
											<div id="15othertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="15othertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
									</div>
								</div>
								<div id="2014" class="tab-pane">
									<ul class="nav nav-tabs">
										<li class="active"><a data-toggle="tab" href="#2014year">贺岁档</a></li>
										<li><a data-toggle="tab" href="#2014work"
											onclick="work14pie()">劳动节档</a></li>
										<li><a data-toggle="tab" href="#2014summer"
											onclick="summer14pie()">暑期档</a></li>
										<li><a data-toggle="tab" href="#2014nation"
											onclick="nation14pie()">国庆档</a></li>
										<li><a data-toggle="tab" href="#2014other"
											onclick="other14pie()">其他档</a></li>
									</ul>
									<div class="tab-content">
										<div id="2014year" class="tab-pane active">
											<div id="14yeartime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="14yeartime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2014work" class="tab-pane">
											<div id="14worktime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="14worktime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2014summer" class="tab-pane">
											<div id="14summertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="14summertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2014nation" class="tab-pane">
											<div id="14nationtime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="14nationtime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2014other" class="tab-pane">
											<div id="14othertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="14othertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
									</div>
								</div>
								<div id="2013" class="tab-pane">
									<ul class="nav nav-tabs">
										<li class="active"><a data-toggle="tab" href="#2013year">贺岁档</a></li>
										<li><a data-toggle="tab" href="#2013work"
											onclick="work13pie()">劳动节档</a></li>
										<li><a data-toggle="tab" href="#2013summer"
											onclick="summer13pie()">暑期档</a></li>
										<li><a data-toggle="tab" href="#2013nation"
											onclick="nation13pie()">国庆档</a></li>
										<li><a data-toggle="tab" href="#2013other"
											onclick="other13pie()">其他档</a></li>
									</ul>
									<div class="tab-content">
										<div id="2013year" class="tab-pane active">
											<div id="13yeartime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="13yeartime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2013work" class="tab-pane">
											<div id="13worktime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="13worktime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2013summer" class="tab-pane">
											<div id="13summertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="13summertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2013nation" class="tab-pane">
											<div id="13nationtime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="13nationtime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
										<div id="2013other" class="tab-pane">
											<div id="13othertime-style" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
											<div id="13othertime-line1" class="tab-pane active"
												style="width: 900px; height: 500px"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-5">
							<div style="margin:10px">
								<a><strong>选择影片：</strong></a> <select id="audience">
								</select>
								<button type="button" class="btn btn-primary"
									onclick="audience()">
									<span class="glyphicon glyphicon-search" aria-hidden="true">搜索
								</button>
							</div>
							<div class="panel panel-default" style="border:1px solid #ddd;">
								<h4 style="margin: 10px">
									<strong>地域分布</strong>
								</h4>
								<div id="area" style="width: 900px; height: 500px"></div>
							</div>
							<div style="margin-top: 20px; border:1px solid #ddd;">
								<h4 style="margin: 10px">
									<strong>人群属性</strong>
								</h4>
								<div class="row-fluid">
									<div id="age" class="col-md-6"
										style="width: 450px; height: 250px"></div>
									<div id="sex" class="col-md-6"
										style="width: 450px; height: 250px"></div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-6">
							<div style="margin:10px">
								<a><strong>选择影片：</strong></a> <select>
									<option>捉妖记</option>
									<option>美人鱼</option>
								</select>
								<button type="button" class="btn btn-primary">
									<span class="glyphicon glyphicon-search" aria-hidden="true">搜索
								</button>
							</div>
							<div id="comment-num"
								style="width: 900px; height: 500px; border:1px solid #ddd;">
							</div>
							<div id="network-people"
								style="width: 900px; height: 500px; margin-top: 20px;"></div>
							<div>
								<h4>
									<strong>评论内容</strong>
								</h4>
								<p>主要展现：网友觉得影片好的方面的描述</p>
							</div>
						</div>
						<div class="tab-pane" id="panel-7">
							<div style="margin:10px">
								<a><strong>选择影片：</strong></a> <select>
									<option>捉妖记</option>
									<option>美人鱼</option>
								</select>
								<button type="button" class="btn btn-primary">
									<span class="glyphicon glyphicon-search" aria-hidden="true">搜索
								</button>
							</div>
							<div id="blog"
								style="width: 900px; height: 500px; border:1px solid #ddd; overflow:hidden"></div>
						</div>
						<div class="tab-pane" id="panel-8" style="margin-top:20px">
							<div style="margin:10px">
								<a><strong>选择影片：</strong></a> 
								<select id="valuate">
								</select>
								<button type="button" class="btn btn-primary">
									<span class="glyphicon glyphicon-search" aria-hidden="true" onclick="valuation()">搜索
								</button>
							</div>
							<hr>
							<a><strong>网络口碑值</strong></a>
							<div id="wom" style="width:900px; height:40px; text-align:center"></div> 
							<div class="row-fluid">
								<div id="comment_analyse" class="col-md-6" style="width: 450px; height: 250px"></div>
								<div id="cloud" class="col-md-6" style="width: 450px; height: 250px"></div>
							</div>
							<hr>
							<a><strong>主创团队影响力值</strong></a>
							<div id="team" style="width:900px; height:40px; text-align:center"></div> 
							<hr>
							<a><strong>影片类型与档期的量化值</strong></a>
							<div id="type" style="width:900px; height:40px; text-align:center"></div> 
							<hr>
							<a><strong>影片排片量化</strong></a>
							<div id="session" style="width:900px; height:40px; text-align:center"></div> 
							<div id="session_result" style="width:900px; height:450px"></div>
							<hr>
							<a><strong>宣传效果量化</strong></a>
							<div id="promotion" style="width:900px; height:40px; text-align:center"></div> 
							<div id="promotion_result" style="width:900px; height:450px"></div>
							<hr>
							<a><strong>最终量化值</strong></a>
							<div id="final" style="width:900px; height:40px; text-align:center"></div> 
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>




	<%@ include file="common/foot.jsp"%>
	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="echarts/build/dist/echarts.js"></script>

	<script type="text/javascript" src="js/index.js"></script>
	<script type="text/javascript" src="js/category/category.js"></script>
	<script type="text/javascript" src="js/category/info.js"></script>
	<script type="text/javascript" src="js/category/time_style.js"></script>
	<script type="text/javascript" src="js/category/audience.js"></script>
	<script type="text/javascript" src="js/category/comment.js"></script>
	<script type="text/javascript" src="js/category/blog.js"></script>
	<script type="text/javascript" src="js/category/valuation.js"></script>

</body>
</html>
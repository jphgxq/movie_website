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
	<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
	<link href="css/global.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  	
	 <%@ include file="common/head.jsp" %>
     
     <div class="container">
	     <div id="table-container" style="min-width: 310px; margin-top:10px;">
	     	<h4 id="landingpage-title" style="text-align:center; margin-top: 30px; font-weight: bold"></h4>
	     	<table class="table table-hover">
	     		<thead>
	     			<tr>
	     				<td>
	     					
	     				</td>
	     				<td>
	     					<strong>影片名称</strong>
	     				</td>
	     				<td>
	     					<strong>实时票房（万）</strong>
	     				</td>
	     				<td>
	     					<strong>票房占比</strong>
	     				</td>
	     				<td>
	     					<strong>累计票房（万）</strong>
	     				</td>
	     				<td>
	     					<strong>排片占比</strong>
	     				</td>
	     				<td>
	     					<strong>上映天数</strong>
	     				</td>
	     				<td>
	     					
	     				</td>
	     			</tr>
	     		<tbody id="realtimeticketstable" style="text-align:center">
	     			
	     		</tbody>
	     	</table>
	     </div>
	     
	     <div class="container-fluid" style="margin-top:40px">

			<div class="row-fluid">
				<div class="col-md-4">
						<div>
							<h4><strong>排片统计</strong></h4>
						</div>
						<table class="table table-hover table-condensed">
							<thead>
								<tr>
									<td>
										
									</td>
									<td>
										<strong>影片名称</strong>
									</td>
									<td>
										<strong>排片占比</strong>
									</td>
								</tr>
							</thead>
							<tbody id="movie_sum">
							
							</tbody>
						</table>
					</div>
				<div id="movie-statistic" class="col-md-8" style="height: 400px"></div>
			</div>
			<div class="row-fluid" style="margin-top: 30px">
				<div class="col-md-6">
					<div>
						<h4><strong>目前影片票房强度量化结果</strong></h4>
					</div>
					<table class="table table-hover">
						<tr>
							<td>
								<span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span><strong>  电影名</strong>
							</td>
							<td>
								捉妖记
							</td>
						</tr>
						<tr>
							<td>
								<span class="glyphicon glyphicon-comment" aria-hidden="true"></span><strong>  口碑量化</strong>
							</td>
							<td>
								77
							</td>
						</tr>
						<tr>
							<td>
								<span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span><strong>  宣传效果量化</strong>
							</td>
							<td>
								90
							</td>
						</tr>
						<tr>
							<td>
								<span class="glyphicon glyphicon-education" aria-hidden="true"></span><strong>  创作团队量化</strong>
							</td>
							<td>
								87
							</td>
						</tr>
						<tr>
							<td>
								<span class="glyphicon glyphicon-check" aria-hidden="true"></span><strong>量化结果</strong>
							</td>
							<td>
								87
							</td>
						</tr>
					</table>
				</div>

				<div class="col-md-6" style="height: 300px">
					<h4><strong>影讯动态</strong></h4>
					<div id="movie_news">
						<p><strong>月度总结：9月国产片略胜进口片 总票房低于北美13% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>2015-11-09</p>
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
  </body>
</html>
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
							<a data-toggle="tab" href="#panel-1"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;用户数据配置&nbsp;&nbsp;</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-2"><span class="glyphicon glyphicon-stop"></span>&nbsp;&nbsp;用户需求结果&nbsp;&nbsp;</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1" style="margin-top: 10px">
							<a>数据配置</a>
							<button class="btn btn-default" type="submit">导入文件</button>
							<button class="btn btn-default btn-success" type="button">导入</button>
							<p style="color: red; margin-top: 10px">（注：方便用户将数据文件，如：xls、sql等数据库结构的文件导入，文件中包含：影片名称、导演、编剧、主演、投资额度等内容）</p>
							<p>需求选择：</p>
							<div class="row-fluid">
								<div class="col-md-1"></div>
								<div class="col-md-11">
									<p><input type="checkbox">观众评价</p>
									<p><input type="checkbox">观众属性特征</p>
									<p><input type="checkbox">热点追踪</p>
									<p><input type="checkbox">主创团队竞争力强度</p>
									<p><input type="checkbox">宣传效果</p>
									<p><input type="checkbox">票房竞争力综合量化明细</p>
									<p><input type="checkbox">Keydata定制化报告</p>
									<p><input type="checkbox">其他需求</p>
									<textarea type="text" style="margin-top: 10px; width: 600px; height: 200px"></textarea>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="panel-2" style="margin-top: 10px">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#">观众评价</a></li>
								<li><a data-toggle="tab" href="#">观众属性特征</a></li>
								<li><a data-toggle="tab" href="#">热点追踪</a></li>
								<li><a data-toggle="tab" href="#">主创团队竞争力强度</a></li>
							</ul>
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

  </body>
</html>
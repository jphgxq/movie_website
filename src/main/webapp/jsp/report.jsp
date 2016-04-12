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
     <div class="container" style="margin-top:50px">
     	<div class="row-fluid">
     		<div class="col-md-2"></div>
     		<div class="col-md-8">
     			<label class="col-md-2">标题</label>
     			<input type="text" class="col-md-10">
     			<label class="col-md-2" style="margin-top: 20px">摘要</label>
     			<textarea type="text" class="col-md-10" style="margin-top: 20px"></textarea>
     			<label class="col-md-2" style="margin-top: 20px">可选项</label>
     			<div class="col-md-10" style="margin-top: 20px">
     				<label class="checkbox-inline">
     					<input type="checkbox" value="option1">口碑数据
     				</label>
     				<label class="checkbox-inline">
     					<input type="checkbox" value="option1">创作团队
     				</label>
     				<label class="checkbox-inline">
     					<input type="checkbox" value="option1">档期/影片类型关系数据
     				</label>
     				<label class="checkbox-inline">
     					<input type="checkbox" value="option1">排片数据
     				</label>
     				<label class="checkbox-inline">
     					<input type="checkbox" value="option1">微博/百度指数数据
     				</label>
     				<label class="checkbox-inline">
     					<input type="checkbox" value="option1">宣传效果数据
     				</label>
     			</div>
     			<div>
     				<div class="col-md-4"></div>
     				<input class="btn btn-default btn-success col-md-1" type="submit" value="确定" style="margin-top: 60px">
     				<div class="col-md-1"></div>
     				<div class="col-md-1"></div>
     				<input class="btn btn-default btn-warning col-md-1" type="submit" value="取消" style="margin-top: 60px">
     				<div class="col-md-4"></div>
     			</div>
     		</div>
     		<div class="col-md-2"></div>
     	</div>
     </div>

	<%@ include file="common/foot.jsp" %>
	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 
	<script src="echarts/build/dist/echarts.js"></script>

    <script type="text/javascript" src="js/index.js"></script> 

  </body>
</html>
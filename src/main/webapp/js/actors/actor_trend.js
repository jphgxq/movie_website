//影人实时数据的热门影人动态追踪部分
//指数趋势的折线图
$(function () {
	  // 路径配置
		require.config({
		    paths: {
		        echarts: 'echarts/build/dist'
		    }
		});
		
		// 使用
		require(
		    [
		        'echarts',
		        'echarts/chart/line', // 使用柱状图就加载bar模块，按需加载
		        'echarts/chart/map'
		    ],
		function (ec) {
		    // 基于准备好的dom，初始化echarts图表
		    var lineChart = ec.init(document.getElementById('actor-trend')); 
		    
		    option = {
		    	    tooltip : {
		    	        trigger: 'axis'
		    	    },
		    	    legend: {
		    	        data:['邮件营销']
		    	    },
		    	    toolbox: {
		    	        show : true,
		    	        feature : {
		    	            mark : {show: true},
		    	            dataView : {show: true, readOnly: false},
		    	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
		    	            restore : {show: true},
		    	            saveAsImage : {show: true}
		    	        }
		    	    },
		    	    calculable : true,
		    	    xAxis : [
		    	        {
		    	            type : 'category',
		    	            boundaryGap : false,
		    	            data : ['周一','周二','周三','周四','周五','周六','周日']
		    	        }
		    	    ],
		    	    yAxis : [
		    	        {
		    	            type : 'value'
		    	        }
		    	    ],
		    	    series : [
		    	        {
		    	            name:'邮件营销',
		    	            type:'line',
		    	            stack: '总量',
		    	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
		    	            data:[120, 132, 101, 134, 90, 230, 210]
		    	        }
		    	    ]
		    	};
		    	                    
		    
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    	                    
		}
		
		);



});
//影片实时数据的电影评论部分
//电影评论数的折线图
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
		    var lineChart = ec.init(document.getElementById('comment-num')); 
		    
		    option = {
		    		title : {
	        	    	text: '电影评论数',
	        	    },
		    	    tooltip : {
		    	        trigger: 'axis'
		    	    },
		    	    toolbox: {
		    	        show : true,
		    	        feature : {
		    	            mark : {show: true},
		    	            dataView : {show: true, readOnly: false},
		    	            magicType : {show: true, type: ['line', 'bar']},
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
		    	            type : 'value',
		    	            axisLabel : {
		    	                formatter: '{value} '
		    	            }
		    	        }
		    	    ],
		    	    series : [
		    	              {
		    	                  name:'最高',
		    	                  type:'line',
		    	                  data:[11, 11, 15, 13, 12, 13, 10],
		    	                  markPoint : {
		    	                      data : [
		    	                          {type : 'max', name: '最大值'},
		    	                          {type : 'min', name: '最小值'}
		    	                      ]
		    	                  },
		    	                  markLine : {
		    	                      data : [
		    	                          {type : 'average', name: '平均值'}
		    	                      ]
		    	                  }
		    	              },
		    	              {
		    	                  name:'最低',
		    	                  type:'line',
		    	                  data:[1, -2, 2, 5, 3, 2, 0],
		    	                  markPoint : {
		    	                      data : [
		    	                          {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
		    	                      ]
		    	                  },
		    	                  markLine : {
		    	                      data : [
		    	                          {type : 'average', name : '平均值'}
		    	                      ]
		    	                  }
		    	              }
		    	          ]
		    	}; 
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    network_people();
		    	                    
		}
		
		);



});
//网络水军占比
function network_people() {
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
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('network-people')); 
        
        option = {
        	    title : {
        	        text: '网络水军占比',
        	        x: 'center'
        	    },
        	    tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['水军','正常']
        	    },
        	    toolbox: {
        	        show : true,
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            magicType : {
        	            	show: true, 
        	            	type: ['pie', 'funnel'],
        	            	option: {
        	            		funnel: {
        	            			x: '25%',
        	            			width: '50%',
        	            			funnelAlign: 'left',
        	            			max: '1548'
        	            		}
        	            	}
        	            },
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    calculable : true,
        	    series : [
        	              {
        	                  name:'网络水军占比',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
        	                      {value:20, name:'水军'},
        	                      {value:80, name:'正常'}
        	                  ]
        	              }
        	          ]
        	};            	                   
        // 为echarts对象加载数据 
        pieChart.setOption(option);                
    }
);
    
}
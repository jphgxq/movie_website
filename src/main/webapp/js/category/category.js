//影片实时数据
$(function () {
	
	//历史票房排行榜
	$.ajax({
		type: "POST",
		url: "getTicketHistory.action",
		dataType: "json",
		success: function(data){
			$('#tickets_history').empty();
			var html = '';
			$.each(data.tickets_history, function(index, tickets_history){
				index+=1;
				if(index<=25){
					html += '<tr><td>'+tickets_history['name']+'</td><td>'+tickets_history['type']+'</td><td>'+tickets_history['year']+'</td><td>'+tickets_history['sum_tickets']+'</td><td>'+tickets_history['price_ave']+'</td><td>'+tickets_history['people_ave']+'</td><td>'+tickets_history['area']+'</td><td>'+tickets_history['date'].substr(0,11)+'</td></tr>';
				}else{
					return false;
				}
			});
			$('#tickets_history').html(html);
		}
	});
	
	//当月票房
	$.ajax({
		type: "POST",
		url: "getTicketMonth.action",
		dataType: "json",
		success: function(data){
			$('#tickets_month').empty();
			var html = '';
			$.each(data.tickets_month, function(index, tickets_month){
				index+=1;
				if(index<=10){
					html += '<tr><td>'+tickets_month['rank']+'</td><td>'+tickets_month['name']+'</td><td>'+tickets_month['days']+'</td><td>'+tickets_month['tickets_month']+'</td><td>'+tickets_month['price_ave']+'</td><td>'+tickets_month['people_ave']+'</td><td>'+tickets_month['per_month']+'%'+'</td><td>'+tickets_month['release_time']+'</td><td>'+tickets_month['wom_index']+'</td></tr>';
				}else{
					return false;
				}
			});
			$('#tickets_month').html(html);
		}
	});
	
	//本周票房
	$.ajax({
		type: "POST",
		url: "getTicketWeek.action",
		dataType: "json",
		success: function(data){
			$('#tickets_week').empty();
			var html = '';
			$.each(data.tickets_week, function(index, tickets_week){
				index+=1;
				if(index<=10){
					html += '<tr><td>'+tickets_week['rank']+'</td><td>'+tickets_week['name']+'</td><td>'+tickets_week['tickets_week']+'</td><td>'+tickets_week['tickets_sum']+'</td><td>'+tickets_week['days']+'</td><td>'+tickets_week['price_ave']+'</td><td>'+tickets_week['people_ave']+'</td><td>'+tickets_week['wom_index']+'</td></tr>';
				}else{
					return false;
				}
			});
			$('#tickets_week').html(html);
		}
	});
	
	//历史票房趋势
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
        var lineChart = ec.init(document.getElementById('trend-1')); 

        $.post('getMonthTrend.action').done(function(data){
        	var a = [];
        	var b = [];
        	$.each(data.month_trend, function(index,month_trend){
        		a.push(month_trend['date']);
        		b.push(month_trend['tickets']);
        	});
        	lineChart.setOption({
        	    title : {
        	        text: '历史票房趋势'
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
              	            data : a
              	        }
              	],
        	    yAxis : [
        	        {
        	            type : 'value',
        	            axisLabel : {
        	                formatter: '{value}'
        	            }
        	        }
        	    ],     		
             	series : [
              	        {
              	            name:'票房量',
              	            type:'line',
              	            data: b,
              	            markPoint : {
              	                data : [
              	                    {type : 'max', name: '最大值'}
              	                ]
              	            }, 
              	            markLine : {
              	                data : [
              	                    {type : 'average', name: '平均值'}
              	                ]
              	            }
              	        }
              	    ]
        	});
        });
      	                    
    }

    );
    


});

//月票房趋势图
function trend_month() {
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
        var lineChart = ec.init(document.getElementById('trend-2')); 

        $.post('getMonthTrend.action').done(function(data){
        	var a = [];
        	var b = [];
        	$.each(data.month_trend, function(index,month_trend){
        		a.push(month_trend['date']);
        		b.push(month_trend['tickets']);
        	});
        	lineChart.setOption({
        	    title : {
        	        text: '月票房趋势'
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
              	            data : a
              	        }
              	],
        	    yAxis : [
        	        {
        	            type : 'value',
        	            axisLabel : {
        	                formatter: '{value}'
        	            }
        	        }
        	    ],     		
             	series : [
              	        {
              	            name:'票房量',
              	            type:'line',
              	            data: b,
              	            markPoint : {
              	                data : [
              	                    {type : 'max', name: '最大值'}
              	                ]
              	            }, 
              	            markLine : {
              	                data : [
              	                    {type : 'average', name: '平均值'}
              	                ]
              	            }
              	        }
              	    ]
        	});
        });
      	                    
    }

    );
}

//本周票房趋势图
function trend_week() {
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
        var lineChart = ec.init(document.getElementById('trend-3')); 

        $.post('getWeekTrend.action').done(function(data){
        	var a = [];
        	var b = [];
        	$.each(data.week_trend, function(index,week_trend){
        		a.push(week_trend['date']);
        		b.push(week_trend['tickets']);
        	});
        	lineChart.setOption({
        	    title : {
        	        text: '本周票房趋势'
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
              	            data : a
              	        }
              	],
        	    yAxis : [
        	        {
        	            type : 'value',
        	            axisLabel : {
        	                formatter: '{value}'
        	            }
        	        }
        	    ],     		
             	series : [
              	        {
              	            name:'票房量',
              	            type:'line',
              	            data: b,
              	            markPoint : {
              	                data : [
              	                    {type : 'max', name: '最大值'}
              	                ]
              	            }, 
              	            markLine : {
              	                data : [
              	                    {type : 'average', name: '平均值'}
              	                ]
              	            }
              	        }
              	    ]
        	});
        });
      	                    
    }

    );
}

//热映票房趋势图
function trend_hot() {
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
      var lineChart = ec.init(document.getElementById('trend-4')); 
      
      option = {
      	    title : {
      	        text: '热映票房趋势',
      	        //subtext: '纯属虚构'
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
      	            data : ['2015年12月31日','2015年1月1日','2015年1月2日','2015年1月3日','2015年1月4日','2015年1月5日','2015年1月6日']
      	        }
      	    ],
      	    yAxis : [
      	        {
      	            type : 'value',
      	            axisLabel : {
      	                formatter: '{value}'
      	            }
      	        }
      	    ],
      	    series : [
      	        {
      	            name:'票房量',
      	            type:'line',
      	            data:[11, 11, 15, 13, 12, 13, 10],
      	            markPoint : {
      	                data : [
      	                    {type : 'max', name: '最大值'}
      	                ]
      	            },
      	            markLine : {
      	                data : [
      	                    {type : 'average', name: '平均值'}
      	                ]
      	            }
      	        }
      	    ]
      	}; 
      // 为echarts对象加载数据 
      lineChart.setOption(option);      
      	                    
  }

  );
  
}



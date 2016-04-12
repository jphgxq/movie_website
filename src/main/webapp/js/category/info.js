//实时排片详情饼状图
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
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('info-pie')); 
        
        
        $.post('getMovieDisplay.action').done(function(data){
        	pieChart.setOption({

        	    title : {
        	        text: '全国排片统计',
        	        x: 'center'
        	    },
        	    tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: []
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
        	                  name:'影片信息',
        	                  type:'pie',
        	                  radius : ['50%', '70%'],
        	                  data:data.movie_display
        	              }
        	    ]
        	});
        });   
        	                    
    }
);
    //实时排片详情下的表格，城市数据
    $.ajax({
		type: "POST",
		url: "getCityDisplay.action",
		dataType: "json",
		success: function(data){
			$('#cityDisplay').empty();
			var html = '';
			$.each(data.city_display, function(index, display){
				index+=1;
				if(index<=10){
					html += '<tr><td>'+display['name']+'</td><td>'+display['movie_num']+'</td><td>'+display['per_num']+'</td><td>'+display['renzhi_index']+'</td><td>'+display['tickets_index']+'</td><td>'+display['rap_index']+'</td></tr>';
				}else{
					return false;
				}
			});
			$('#cityDisplay').html(html);
		}
	});
    
});
//排片趋势折线图
function trend_analysis() {
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
	      var lineChart = ec.init(document.getElementById('info-line')); 
	      
	      option = {
	      	    tooltip : {
	      	        trigger: 'axis'
	      	    },
	      	    legend : {
	      	    	data: ['全国','美人鱼','卧虎藏龙：青冥宝剑','西游记之孙悟空三打白骨精','澳门风云3','火影忍者剧场版：博人传','功夫熊猫3','高跟鞋先生','圣斗士星矢：圣域传说','末日迷踪','托马斯和朋友们多多岛之迷失宝藏']
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
	      	            data : ['2月18日','2月19日','2月20日','2月21日','2月22日','2月23日','2月24日','2月25日','2月26日','2月27日']
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
	      	            name:'全国',
	      	            type:'line',
	      	            data:[194237,200335,198556,200495,203577,210143,217550,218839,214666,210246],
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
	      	        },
	      	        {
	      	            name:'美人鱼',
	      	            type:'line',
	      	            data:[75741,63828,66654,67689,67243,65603,65013,64113,58129,56870],
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
	      	        },
	      	        {
	      	            name:'卧虎藏龙：青冥宝剑',
	      	            type:'line',
	      	            data:[1498,49439,45840,42505,38989,35890,34300,32567,22926,21270],
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
	      	        },
	      	        {
	      	            name:'西游记之孙悟空三打白骨精',
	      	            type:'line',
	      	            data:[35483,24617,25176,25946,26955,27796,27902,27602,22974,22225],
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
	      	        },
	      	        {
	      	            name:'澳门风云3',
	      	            type:'line',
	      	            data:[32822,22529,22781,22940,23262,23784,23989,23690,17931,17234],
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
	      	        },
	      	        {
	      	            name:'火影忍者剧场版：博人传',
	      	            type:'line',
	      	            data:[29631,21368,20749,19885,18291,16449,15790,14888,7364,7850],
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
	      	        },
	      	        {
	      	            name:'功夫熊猫3',
	      	            type:'line',
	      	            data:[13453,9446,10983,12073,11851,11607,11328,11028,7811,9837],
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
	      	        },
	      	        {
	      	            name:'高跟鞋先生',
	      	            type:'line',
	      	            data:[11862,6812,7262,7797,8324,9147,9827,10033,6671,6854],
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
	      	        },
	      	        {
	      	            name:'圣斗士星矢：圣域传说',
	      	            type:'line',
	      	            data:[0,0,0,0,2,3,0,151,27223,24985],
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
	      	        },
	      	        {
	      	            name:'末日迷踪',
	      	            type:'line',
	      	            data:[0,0,0,0,1,2,0,126,20184,17636],
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
	      	        },
	      	        {
	      	            name:'托马斯和朋友们多多岛之迷失宝藏',
	      	            type:'line',
	      	            data:[1,7,6298,6684,5230,4320,3853,3420,1568,3055],
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

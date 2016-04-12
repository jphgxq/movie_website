//影片实时数据的热门影片观众特征部分
//地域分布的地图
$(function () {
	
	//选择影片选项数据
	//历史票房排行榜
	$.ajax({
		type: "POST",
		url: "getValuationMovie.action",
		dataType: "json",
		success: function(data){
			$('#valuate').empty();
			var html = '';
			$.each(data.valuate, function(index, valuate){
				index+=1;
				if(index<=3){
					html += '<option>'+valuate['name']+'</option>';
				}else{
					return false;
				}
			});
			$('#valuate').html(html);
		}
	});
});

function valuation(){
	var name = document.getElementById('valuate').value;
	$.ajax({
		type: "POST",
		url: "getValuationMovie.action",
		dataType: "json",
		success: function(data){
			$('#team').empty();
			$('#type').empty();
			$('#session').empty();
			$('#promotion').empty();
			$('#final').empty();
			$('#wom').empty();
			var html1 = '';
			var html2 = '';
			var html3 = '';
			var html4 = '';
			var html5 = '';
			var html6 = '';
			$.each(data.valuate, function(index, valuate){
				if (valuate['name']==name){
					html1+='量化结果：'+valuate['team'];
					html2+='量化结果：'+valuate['type'];
					html3+='量化结果：'+valuate['session'];
					html4+='量化结果：'+valuate['promotion'];
					html5+='量化结果：'+valuate['finalscore'];
					html6+='量化结果：'+valuate['wom'];
				}
			});
			$('#team').html(html1);
			$('#type').html(html2);
			$('#session').html(html3);
			$('#promotion').html(html4);
			$('#final').html(html5);
			$('#wom').html(html6);
		}
	});
	comment_analyse();
}

function comment_analyse(){
	var name = document.getElementById('valuate').value;
	require.config({
        paths: {
            echarts: 'echarts/build/dist'
        }
    });
    
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var lineChart = ec.init(document.getElementById('comment_analyse')); 

        $.post('getValuationMovie.action').done(function(data){
        	var a = [];
        	$.each(data.valuate, function(index,valuate){
        		if(valuate['name']==name){
        			a.push(valuate['bad_comment']);
        			a.push(valuate['normal_comment']);
        			a.push(valuate['bad_comment']);
        		}
        	});
        	lineChart.setOption({
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
	    	            data : ['差评','中评','好评']
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
	    	            name:'评论数',
	    	            type:'bar',
	    	            data:a,
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
	    	        }
	    	    ]
        	});
        });
      	                    
    }

    );
    session();
}

function session(){
	var name = document.getElementById('valuate').value;
	var a = [];
	var b = [];
	if (name == '破风'){
		a = ['2015/8/6','2015/8/7','2015/8/8','2015/8/9','2015/8/10','2015/8/11','2015/8/12','2015/8/13','2015/8/14','2015/8/15','2015/8/16','2015/8/17','2015/8/18','2015/8/19','2015/8/20','2015/8/21','2015/8/22','2015/8/23','2015/8/24','2015/8/25','2015/8/26','2015/8/27','2015/8/28','2015/8/29','2015/8/30','2015/8/31','2015/9/1','2015/9/2','2015/9/3','2015/9/4','2015/9/5'];
		b = [15180,33469,30591,30024,26778,25288,24848,11496,10310,9704,9565,9734,9723,8418,2893,2748,2655,725,791,686,696,143,109,97,96,124,113,48,41,31,38];
	}
	else if(name == '捉妖记') {
		a = ['2015/7/16','2015/7/17','2015/7/18','2015/7/19','2015/7/20','2015/7/21','2015/7/22','2015/7/23','2015/7/24','2015/7/25','2015/7/26','2015/7/27','2015/7/28','2015/7/29','2015/7/30','2015/7/31','2015/8/1','2015/8/2','2015/8/3','2015/8/4','2015/8/5','2015/8/6','2015/8/7','2015/8/8','2015/8/9','2015/8/10','2015/8/11','2015/8/12','2015/8/13','2015/8/14','2015/8/15'];
		b = [58123,47793,49875,50816,50243,49234,49402,46844,41363,43904,44457,43751,43743,44068,27753,25658,30672,32473,32954,33393,33478,30904,24518,26070,28134,29133,30139,30252,20343,20765,22496];
	}
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
	      var lineChart = ec.init(document.getElementById('session_result')); 
	      
	      option = {
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
	      	            name:'排片',
	      	            type:'line',
	      	            data:b,
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
	  promotion();
}

function promotion(){
	var name = document.getElementById('valuate').value;
	var a = [];
	var b = [];
	if (name == '破风'){
		a = ['9月6日',
		     '9月7日',
		     '9月8日',
		     '9月9日',
		     '9月10日',
		     '9月11日',
		     '9月12日',
		     '9月13日',
		     '9月14日',
		     '9月15日',
		     '9月16日',
		     '9月17日',
		     '9月18日',
		     '9月19日',
		     '9月20日',
		     '9月21日',
		     '9月22日',
		     '9月23日',
		     '9月24日',
		     '9月25日',
		     '9月26日',
		     '9月27日',
		     '9月28日',
		     '9月29日',
		     '9月30日',
		     '10月1日',
		     '10月2日',
		     '10月3日',
		     '10月4日',
		     '10月5日'
];
		b = [4915,
		     4164,
		     4014,
		     4125,
		     4097,
		     16585,
		     34764,
		     43838,
		     23193,
		     20601,
		     19631,
		     18269,
		     17155,
		     19401,
		     17802,
		     11771,
		     11471,
		     9737,
		     8693,
		     8552,
		     10628,
		     10241,
		     7467,
		     7269,
		     7870,
		     9571,
		     8318,
		     7568,
		     7849,
		     8601
];
	}
	else if(name == '捉妖记') {
		a = ['8月17日',
		     '8月18日',
		     '8月19日',
		     '8月20日',
		     '8月21日',
		     '8月22日',
		     '8月23日',
		     '8月24日',
		     '8月25日',
		     '8月26日',
		     '8月27日',
		     '8月28日',
		     '8月29日',
		     '8月30日',
		     '8月31日',
		     '9月1日',
		     '9月2日',
		     '9月3日',
		     '9月4日',
		     '9月5日',
		     '9月6日',
		     '9月7日',
		     '9月8日',
		     '9月9日',
		     '9月10日',
		     '9月11日',
		     '9月12日',
		     '9月13日',
		     '9月14日',
		     '9月15日'
];
		b = [206976,
		     193617,
		     204871,
		     202947,
		     192255,
		     204182,
		     204401,
		     161780,
		     154040,
		     151741,
		     154379,
		     157426,
		     167970,
		     171229,
		     147026,
		     134580,
		     158638,
		     180003,
		     180905,
		     161515,
		     123255,
		     100152,
		     106769,
		     111370,
		     113752,
		     133498,
		     177655,
		     195248,
		     135542,
		     127924
		     ];
	}
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
	      var lineChart = ec.init(document.getElementById('promotion_result')); 
	      
	      option = {
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
	      	            name:'宣传度',
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
	      	}; 
	      // 为echarts对象加载数据 
	      lineChart.setOption(option); 
	      	                    
	  }

	  );
	  cloud();
}

function cloud(){
	var name = document.getElementById('valuate').value;
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
	          'echarts/chart/wordCloud', // 使用柱状图就加载bar模块，按需加载
	      ],
	  function (ec) {
	      // 基于准备好的dom，初始化echarts图表
	      var lineChart = ec.init(document.getElementById('cloud')); 
	      
	      option = {
	    		    tooltip: {
	    		        show: true
	    		    },
	    		    series: [{
	    		        type: 'wordCloud',
	    		        size: ['80%', '80%'],
	    		        textRotation : [0, 45, 90, -45],
	    		        textPadding: 0,
	    		        autoSize: {
	    		            enable: true,
	    		            minSize: 14
	    		        },
	    		        data: [
	    		            {
	    		                name: "剧情",
	    		                value: 10000,
	    		                itemStyle: {
	    		                    normal: {
	    		                        color: 'black'
	    		                    }
	    		                }
	    		            },
	    		            {
	    		                name: "电影",
	    		                value: 6181,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "特效",
	    		                value: 4386,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "可爱",
	    		                value: 4055,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "感觉",
	    		                value: 2467,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "票房",
	    		                value: 2244,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "特效",
	    		                value: 1898,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "爱情",
	    		                value: 1484,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "自行车",
	    		                value: 1112,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "单一",
	    		                value: 965,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "一个",
	    		                value: 847,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "多余",
	    		                value: 582,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "比赛",
	    		                value: 550,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "还是",
	    		                value: 462,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "感情",
	    		                value: 366,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "题材",
	    		                value: 360,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "没有",
	    		                value: 273,
	    		                itemStyle: createRandomItemStyle()
	    		            },
	    		            {
	    		                name: "可以",
	    		                value: 265,
	    		                itemStyle: createRandomItemStyle()
	    		            }
	    		        ]
	    		    }]
	      	}; 
	      // 为echarts对象加载数据 
	      lineChart.setOption(option); 
	      	                    
	  }

	  );
}

function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}
//影人实时数据的热门影人粉丝特征部分
//地域分布的地图
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
            'echarts/chart/map' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var lineChart = ec.init(document.getElementById('fan-area')); 
        
        option = {
        	    title : {
        	    	text: '地域分布',
        	        subtext: '纯属虚构',
        	        x:'center'
        	    },
        	    tooltip : {
        	        trigger: 'item'
        	    },
        	    legend: {
        	    	orient: 'vertical',
        	    	x: 'left',
        	    	data: ['iphone3','iphone4','iphone5']
        	    },
        	    dataRange: {
        	        min: 0,
        	        max: 2500,
        	        x: 'left',
        	        y: 'bottom',
        	        text:['高','低'],           // 文本，默认为数值文本
        	        calculable : true
        	    },
        	    toolbox: {
        	        show: true,
        	        orient : 'vertical',
        	        x: 'right',
        	        y: 'center',
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    roamController: {
        	        show: true,
        	        x: 'right',
        	        mapTypeControl: {
        	            'china': true
        	        }
        	    },
        	    series : [
        	              {
        	                  name: 'iphone3',
        	                  type: 'map',
        	                  mapType: 'china',
        	                  roam: false,
        	                  itemStyle:{
        	                      normal:{label:{show:true}},
        	                      emphasis:{label:{show:true}}
        	                  },
        	                  data:[
        	                      {name: '北京',value: Math.round(Math.random()*1000)},
        	                      {name: '天津',value: Math.round(Math.random()*1000)},
        	                      {name: '上海',value: Math.round(Math.random()*1000)},
        	                      {name: '重庆',value: Math.round(Math.random()*1000)},
        	                      {name: '河北',value: Math.round(Math.random()*1000)},
        	                      {name: '河南',value: Math.round(Math.random()*1000)},
        	                      {name: '云南',value: Math.round(Math.random()*1000)},
        	                      {name: '辽宁',value: Math.round(Math.random()*1000)},
        	                      {name: '黑龙江',value: Math.round(Math.random()*1000)},
        	                      {name: '湖南',value: Math.round(Math.random()*1000)},
        	                      {name: '安徽',value: Math.round(Math.random()*1000)},
        	                      {name: '山东',value: Math.round(Math.random()*1000)},
        	                      {name: '新疆',value: Math.round(Math.random()*1000)},
        	                      {name: '江苏',value: Math.round(Math.random()*1000)},
        	                      {name: '浙江',value: Math.round(Math.random()*1000)},
        	                      {name: '江西',value: Math.round(Math.random()*1000)},
        	                      {name: '湖北',value: Math.round(Math.random()*1000)},
        	                      {name: '广西',value: Math.round(Math.random()*1000)},
        	                      {name: '甘肃',value: Math.round(Math.random()*1000)},
        	                      {name: '山西',value: Math.round(Math.random()*1000)},
        	                      {name: '内蒙古',value: Math.round(Math.random()*1000)},
        	                      {name: '陕西',value: Math.round(Math.random()*1000)},
        	                      {name: '吉林',value: Math.round(Math.random()*1000)},
        	                      {name: '福建',value: Math.round(Math.random()*1000)},
        	                      {name: '贵州',value: Math.round(Math.random()*1000)},
        	                      {name: '广东',value: Math.round(Math.random()*1000)},
        	                      {name: '青海',value: Math.round(Math.random()*1000)},
        	                      {name: '西藏',value: Math.round(Math.random()*1000)},
        	                      {name: '四川',value: Math.round(Math.random()*1000)},
        	                      {name: '宁夏',value: Math.round(Math.random()*1000)},
        	                      {name: '海南',value: Math.round(Math.random()*1000)},
        	                      {name: '台湾',value: Math.round(Math.random()*1000)},
        	                      {name: '香港',value: Math.round(Math.random()*1000)},
        	                      {name: '澳门',value: Math.round(Math.random()*1000)}
        	                  ]
        	              },
        	              {
        	                  name: 'iphone4',
        	                  type: 'map',
        	                  mapType: 'china',
        	                  itemStyle:{
        	                      normal:{label:{show:true}},
        	                      emphasis:{label:{show:true}}
        	                  },
        	                  data:[
        	                      {name: '北京',value: Math.round(Math.random()*1000)},
        	                      {name: '天津',value: Math.round(Math.random()*1000)},
        	                      {name: '上海',value: Math.round(Math.random()*1000)},
        	                      {name: '重庆',value: Math.round(Math.random()*1000)},
        	                      {name: '河北',value: Math.round(Math.random()*1000)},
        	                      {name: '安徽',value: Math.round(Math.random()*1000)},
        	                      {name: '新疆',value: Math.round(Math.random()*1000)},
        	                      {name: '浙江',value: Math.round(Math.random()*1000)},
        	                      {name: '江西',value: Math.round(Math.random()*1000)},
        	                      {name: '山西',value: Math.round(Math.random()*1000)},
        	                      {name: '内蒙古',value: Math.round(Math.random()*1000)},
        	                      {name: '吉林',value: Math.round(Math.random()*1000)},
        	                      {name: '福建',value: Math.round(Math.random()*1000)},
        	                      {name: '广东',value: Math.round(Math.random()*1000)},
        	                      {name: '西藏',value: Math.round(Math.random()*1000)},
        	                      {name: '四川',value: Math.round(Math.random()*1000)},
        	                      {name: '宁夏',value: Math.round(Math.random()*1000)},
        	                      {name: '香港',value: Math.round(Math.random()*1000)},
        	                      {name: '澳门',value: Math.round(Math.random()*1000)}
        	                  ]
        	              },
        	              {
        	                  name: 'iphone5',
        	                  type: 'map',
        	                  mapType: 'china',
        	                  itemStyle:{
        	                      normal:{label:{show:true}},
        	                      emphasis:{label:{show:true}}
        	                  },
        	                  data:[
        	                      {name: '北京',value: Math.round(Math.random()*1000)},
        	                      {name: '天津',value: Math.round(Math.random()*1000)},
        	                      {name: '上海',value: Math.round(Math.random()*1000)},
        	                      {name: '广东',value: Math.round(Math.random()*1000)},
        	                      {name: '台湾',value: Math.round(Math.random()*1000)},
        	                      {name: '香港',value: Math.round(Math.random()*1000)},
        	                      {name: '澳门',value: Math.round(Math.random()*1000)}
        	                  ]
        	              }
        	          ]
        	}; 
        // 为echarts对象加载数据 
        lineChart.setOption(option); 
        fan_age_feature();
        	                    
    }

    );

});

//人群属性的年龄分布
function fan_age_feature() {
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
		        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
		        'echarts/chart/map'
		    ],
		function (ec) {
		    // 基于准备好的dom，初始化echarts图表
		    var lineChart = ec.init(document.getElementById('fan-age')); 
		    
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
		    	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
		    	            type:'bar',
		    	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
		    	}; 
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    fan_sex_feature();
		    	                    
		}
		
		);



}

//人群属性的性别分布
function fan_sex_feature() {
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
		        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
		        'echarts/chart/map'
		    ],
		function (ec) {
		    // 基于准备好的dom，初始化echarts图表
		    var lineChart = ec.init(document.getElementById('fan-sex')); 
		    
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
		    	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
		    	            type:'bar',
		    	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
		    	}; 
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    fan_business_feature();
		    	                    
		}
		
		);



}

//商户分布
function fan_business_feature() {
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
		        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
		        'echarts/chart/map'
		    ],
		function (ec) {
		    // 基于准备好的dom，初始化echarts图表
		    var lineChart = ec.init(document.getElementById('fan-business')); 
		    
		    option = {
		    		title : {
	        	    	text: '地方商户内容发布及反馈日间分布情况一周末',
	        	        subtext: '纯属虚构',
	        	        x:'center'
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
		    	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
		    	            type:'bar',
		    	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
		    	}; 
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    	                    
		}
		
		);



}
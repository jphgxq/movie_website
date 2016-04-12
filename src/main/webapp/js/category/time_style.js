//影片档期与类型饼状图
//2015贺岁档饼状图
function time_pie() {
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
        var pieChart = ec.init(document.getElementById('15yeartime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==01||month==02)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2015&&(month==01||month==02)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        year15time_line1();
        year16pie();
        year14pie();
        year13pie();
    }
);    
}
//柱状图15贺岁档
function year15time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('15yeartime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==01||month==02)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==01||month==02)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}

//2015劳动节档饼状图
function work15pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('15worktime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==05)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2015&&(month==05)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2015&&(month==05)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        work15time_line1();
    }
);
}
//2015劳动节档柱状图
function work15time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('15worktime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==05)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==05)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015暑期档饼状图
function summer15pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('15summertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==07||month==08)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2015&&(month==07||month==08)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        summer15time_line1();
    }
);
}
function summer15time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('15summertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==07||month==08)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==07||month==08)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015国庆档饼状图
function nation15pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('15nationtime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2015&&(month==10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        nation15time_line1();
    }
);
}
function nation15time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('15nationtime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month==10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015其他档饼状图
function other15pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('15othertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        other15time_line1();
    }
);
}

function other15time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('15othertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}

function year16pie(){
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
        var pieChart = ec.init(document.getElementById('16yeartime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==01||month==02)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2016&&(month==01||month==02)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
    }
);
    year16_timeline1();
}

function year16_timeline1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('16yeartime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==01||month==02)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==01||month==02)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}

function work16pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('16worktime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==05)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2016&&(month==05)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2016&&(month==05)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        work16time_line1();
    }
);
}
//2015劳动节档柱状图
function work16time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('16worktime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==05)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==05)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015暑期档饼状图
function summer16pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('16summertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==07||month==08)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2016&&(month==07||month==08)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        summer16time_line1();
    }
);
}
function summer16time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('16summertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==07||month==08)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==07||month==08)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015国庆档饼状图
function nation16pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('16nationtime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2016&&(month==10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2016&&(month==10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        nation16time_line1();
    }
);
}
function nation16time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('16nationtime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month==10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2015&&(month==10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month==10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015其他档饼状图
function other16pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('16othertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        other16time_line1();
    }
);
}

function other16time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('16othertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2016&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}

function year14pie(){
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
        var pieChart = ec.init(document.getElementById('14yeartime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==01||month==02)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2014&&(month==01||month==02)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
    }
);
    year14_timeline1();
}

function year14_timeline1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('14yeartime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==01||month==02)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==01||month==02)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}

//2015劳动节档饼状图
function work14pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('14worktime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==05)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2014&&(month==05)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2014&&(month==05)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        work14time_line1();
    }
);
}
//2015劳动节档柱状图
function work14time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('14worktime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==05)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==05)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015暑期档饼状图
function summer14pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('14summertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==07||month==08)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2014&&(month==07||month==08)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        summer14time_line1();
    }
);
}
function summer14time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('14summertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==07||month==08)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==07||month==08)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015国庆档饼状图
function nation14pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('14nationtime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2014&&(month==10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2014&&(month==10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        nation14time_line1();
    }
);
}
function nation14time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('14nationtime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month==10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month==10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015其他档饼状图
function other14pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('14othertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        other14time_line1();
    }
);
}

function other14time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('14othertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2014&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}


function year13pie(){
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
        var pieChart = ec.init(document.getElementById('13yeartime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==01||month==02)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2013&&(month==01||month==02)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
    }
);
    year13time_line1();
}

function year13time_line1(){
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('13yeartime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==01||month==02)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==01||month==02)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}

//2015劳动节档饼状图
function work13pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('13worktime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==05)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2013&&(month==05)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2013&&(month==05)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        work13time_line1();
    }
);
}
//2015劳动节档柱状图
function work13time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('13worktime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==05)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==05)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015暑期档饼状图
function summer13pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('13summertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==07||month==08)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2013&&(month==07||month==08)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        });
        summer13time_line1();
    }
);
}
function summer13time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('13summertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==07||month==08)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==07||month==08)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015国庆档饼状图
function nation13pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('13nationtime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2015&&(month==10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2013&&(month==10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2013&&(month==10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        nation13time_line1();
    }
);
}
function nation13time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('13nationtime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month==10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month==10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
//2015其他档饼状图
function other13pie() {
	//路径配置
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
        var pieChart = ec.init(document.getElementById('13othertime-style')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += 1;
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += 1;
        		}
        	});
        	pieChart.setOption({
        		tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
        	                  name:'影片数据',
        	                  type:'pie',
        	                  radius : ['50%', '60%'],
        	                  data:[
									{value:action, name:'动作'},
									{value:story, name:'剧情'},
									{value:love, name:'爱情'},
									{value:comedy, name:'喜剧'},
									{value:family, name:'家庭'},
									{value:scary, name:'惊悚'},
									{value:science, name:'科幻'},
									{value:mystory, name:'悬疑'},
									{value:strange, name:'奇幻'},
									{value:terror, name:'恐怖'},
									{value:other, name:'其他'}
        	                  ]
        	               }
        	              ]
        	});
        }); 
        other13time_line1();
    }
);
}

function other13time_line1() {
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
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('13othertime-line1')); 
        
        $.post('getYear15InfoPie.action').done(function(data){
        	var action = 0;
        	var story = 0;
        	var love = 0;
        	var comedy = 0;
        	var family = 0;
        	var scary = 0;
        	var science = 0;
        	var mystory = 0;
        	var strange = 0;
        	var terror = 0;
        	var other = 0;
        	$.each(data.year15pie, function(index,year15pie){		
        		var year = year15pie['display_date'].substr(0,4);
        		var month = year15pie['display_date'].substr(5,2);
//        		var day = year15pie['display_date'].substr(8,2);
        		var type = year15pie['type'].substr(0,2);
        		if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='动作') {
        			action += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='剧情') {
        			story += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='爱情') {
        			love += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='喜剧') {
        			comedy += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='家庭') {
        			family += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='惊悚') {
        			scary += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='科幻') {
        			science += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='悬疑') {
        			mystory += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='奇幻') {
        			strange += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)&&type=='恐怖') {
        			terror += parseInt(year15pie['tickets']);
        		}
        		else if(year==2013&&(month!=1&&month!=2&&month!=5&&month!=7&&month!=8&&month!=10)) {
        			other += parseInt(year15pie['tickets']);
        		}
        	});
        	pieChart.setOption({
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
	    	            data : ['动作','剧情','爱情','喜剧','家庭','惊悚','科幻','悬疑','奇幻','恐怖','其他']
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
	    	            name:'影片数据',
	    	            type:'bar',
	    	            data:[action,story,love,comedy,family,scary,science,mystory,strange,terror,other],
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
}
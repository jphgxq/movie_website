//影片实时数据的热门影片观众特征部分
//地域分布的地图
$(function () {
	
	//选择影片选项数据
	//历史票房排行榜
	$.ajax({
		type: "POST",
		url: "getAudienceMovie.action",
		dataType: "json",
		success: function(data){
			$('#audience').empty();
			var html = '';
			$.each(data.audience, function(index, audience){
				index+=1;
				if(index<=3){
					html += '<option>'+audience['name']+'</option>';
				}else{
					return false;
				}
			});
			$('#audience').html(html);
		}
	});
});

function audience() {
	var name = document.getElementById('audience').value;
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
        var lineChart = ec.init(document.getElementById('age')); 

        $.post('getAudienceMovie.action').done(function(data){
        	var a = [];
        	$.each(data.audience, function(index,audience){
        		if(audience['name']==name){
        			a.push(audience['baiyang']);
        			a.push(audience['jinniu']);
        			a.push(audience['shuangzi']);
        			a.push(audience['juxie']);
        			a.push(audience['shizi']);
        			a.push(audience['chunv']);
        			a.push(audience['tiancheng']);
        			a.push(audience['tianxie']);
        			a.push(audience['sheshou']);
        			a.push(audience['mojie']);
        			a.push(audience['shuiping']);
        			a.push(audience['shuangzi']);
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
	    	            data : ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双子座']
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
    sex_feature();
}

function sex_feature(){
	var name = document.getElementById('audience').value;
	require.config({
        paths: {
            echarts: 'echarts/build/dist'
        }
    });
    
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/treemap', // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var lineChart = ec.init(document.getElementById('sex')); 

        $.post('getAudienceMovie.action').done(function(data){
        	$.each(data.audience, function(index,audience){
        		if(audience['name']==name){
        			a = audience['per_male'].split('%')[0];
        			a = a*100;
        			b = audience['per_female'].split('%')[0];
        			b = b*100;
        		}
        	});
        	lineChart.setOption({
        		tooltip : {
	    	        trigger: 'item',
	    	        formatter: '{b}: {c}'
	    	    },
	    	    toolbox: {
	    	        show : true,
	    	        feature : {
	    	            mark : {show: true},
	    	            dataView : {show: true, readOnly: false},
	    	            restore : {show: true},
	    	            saveAsImage : {show: true}
	    	        }
	    	    },
	    	    calculable : true,
	    	    series : [
	    	        {
	    	            name:'性别分布',
	    	            type:'treemap',
	    	            itemStyle: {
	    	            	normal: {
	    	            		label: {
	    	            			show: true,
	    	            			formatter: "{b}"
	    	            		},
	    	            		borderWidth: 1
	    	            	},
	    	            	emphasis: {
	    	            		label: {
	    	            			show: true
	    	            		}
	    	            	}
	    	            },
	    	            data:[
	    	                  {
	    	                	  name: '男',
	    	                	  value: a
	    	                  },
	    	                  {
	    	                	  name: '女',
	    	                	  value: b
	    	                  },
	    	            ],
	    	        }
	    	    ]
        	});
        });
      	                    
    }

    );
    map();
}

function map(){
	var name = document.getElementById('audience').value;
	require.config({
        paths: {
            echarts: 'echarts/build/dist'
        }
    });
    
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/map', // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var lineChart = ec.init(document.getElementById('area'));
        $.post('getAudienceMovie.action').done(function(data){
        	$.each(data.audience, function(index,audience){
        		if(audience['name']==name){
        			shanghai = audience['shanghai']*100;
        			jiangsu = audience['jiangsu']*100;
        			zhejiang = audience['zhejiang']*100;
        			anhui = audience['anhui']*100;
        			beijing = audience['beijing']*100;
        			tianjin = audience['tianjin']*100;
        			guangdong = audience['guangdong']*100;
        			hebei = audience['hebei']*100;
        			henan = audience['henan']*100;
        			shandong = audience['shandong']*100;
        			hubei = audience['hubei']*100;
        			hunan = audience['hunan']*100;
        			jiangxi = audience['jiangxi']*100;
        			fujian = audience['fujian']*100;
        			sichuan = audience['sichuan']*100;
        			chongqing = audience['chongqing']*100;
        			guangxi = audience['guangxi']*100;
        			shanxi = audience['shanxi']*100;
        			liaoning = audience['liaoning']*100;
        			jilin = audience['jilin']*100;
        			heilongjiang = audience['heilongjiang']*100;
        			guizhou = audience['guizhou']*100;
        			shanxi2 = audience['shanxi2']*100;
        			yunnan = audience['yunnan']*100;
        			neimenggu = audience['neimenggu']*100;
        			gansu = audience['gansu']*100;
        			qinghai = audience['qinghai']*100;
        			ningxia = audience['ningxia']*100;
        			xinjiang = audience['xinjiang']*100;
        			hainan = audience['hainan']*100;
        			xizang = audience['xizang']*100;
        			xianggang = audience['xianggang']*100;
        			aomen = audience['aomen']*100;
        			taiwan = audience['taiwan']*100;
        		}
        	});
        	lineChart.setOption({
        		tooltip : {
        	        trigger: 'item'
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
        	                  name: name,
        	                  type: 'map',
        	                  mapType: 'china',
        	                  roam: false,
        	                  itemStyle:{
        	                      normal:{label:{show:true}},
        	                      emphasis:{label:{show:true}}
        	                  },
        	                  data:[
        	                      {name: '北京',value: beijing},
        	                      {name: '天津',value: tianjin},
        	                      {name: '上海',value: shanghai},
        	                      {name: '重庆',value: chongqing},
        	                      {name: '河北',value: hebei},
        	                      {name: '河南',value: henan},
        	                      {name: '云南',value: yunnan},
        	                      {name: '辽宁',value: liaoning},
        	                      {name: '黑龙江',value: heilongjiang},
        	                      {name: '湖南',value: hunan},
        	                      {name: '安徽',value: anhui},
        	                      {name: '山东',value: shandong},
        	                      {name: '新疆',value: xinjiang},
        	                      {name: '江苏',value: jiangsu},
        	                      {name: '浙江',value: zhejiang},
        	                      {name: '江西',value: jiangxi},
        	                      {name: '湖北',value: hubei},
        	                      {name: '广西',value: guangxi},
        	                      {name: '甘肃',value: gansu},
        	                      {name: '山西',value: shanxi},
        	                      {name: '内蒙古',value: neimenggu},
        	                      {name: '陕西',value: shanxi2},
        	                      {name: '吉林',value: jilin},
        	                      {name: '福建',value: fujian},
        	                      {name: '贵州',value: guizhou},
        	                      {name: '广东',value: guangdong},
        	                      {name: '青海',value: qinghai},
        	                      {name: '西藏',value: xizang},
        	                      {name: '四川',value: sichuan},
        	                      {name: '宁夏',value: ningxia},
        	                      {name: '海南',value: hainan},
        	                      {name: '台湾',value: taiwan},
        	                      {name: '香港',value: xianggang},
        	                      {name: '澳门',value: aomen}
        	                  ]
        	              }
        	          ]
        	});
        });
      	                    
    }

    );
}
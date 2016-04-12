//主页
$(function () {
	//主页的Keydata实时票房
	$.ajax({
		type: "POST",
		url: "getRealTimeTicket.action",
		dataType: "json",
		success: function(data){
			$('#realtimeticketstable').empty();
			var html = '';
			$.each(data.tickets, function(index, ticket){
				index+=1;
				if(index<=10){
					html += '<tr><td>'+index+'</td><td>'+ticket['name']+'</td><td>'+ticket['real_time_tickets']+'</td><td>'+ticket['ticket_percent']+'</td><td>'+ticket['sum_tickets']+'</td><td>'+ticket['display_percent']+'</td><td>'+ticket['days']+'</td><td style="color: red">NEW</td></tr>';
				}else{
					return false;
				}
			});
			$('#realtimeticketstable').html(html);
		}
	});
	
	//Keydata实时票房时间更新
	var myDate = new Date();
	$('#landingpage-title').html('KeyData票房数据      ' + myDate.toLocaleString());
	
	//主页排片统计
	$.ajax({
		type: "POST",
		url: "getMovieSum.action",
		dataType: "json",
		success: function(data){
			$('#movie_sum').empty();
			var html = '';
			$.each(data.sums, function(index, sum){
				index += 1;
				if(index<=10){
					html += '<tr><td>'+index+'</td><td>'+sum['name']+'</td><td>'+sum['display_percent']+'</td></tr>'
				}else{
					return false;
				}
			});
			$('#movie_sum').html(html);
		}
	});
	
	//全国排片统计的饼状图
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
        var pieChart = ec.init(document.getElementById('movie-statistic')); 
        
        option = {
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
        	        show : false,
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
        	            			funnelAlign: 'center',
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
        	            	  name:'排片数据',
        	                  type:'pie',
        	                  radius : ['50%', '70%'],
        	                  itemStyle : {
        	                      normal : {
        	                          label : {
        	                              show : false
        	                          },
        	                          labelLine : {
        	                              show : false
        	                          }
        	                      },
        	                      emphasis : {
        	                          label : {
        	                              show : true,
        	                              position : 'center',
        	                              textStyle : {
        	                                  fontSize : '30',
        	                                  fontWeight : 'bold'
        	                              }
        	                          }
        	                      }
        	                  },
        	                  data:[]
        	              }
        	          ]
        	};    
        $.post('getNationalSum.action').done(function(data){
        	pieChart.setOption({
        		series: [{
        			name: '排片数据',
        			type: 'pie',
        			radius : ['50%', '70%'],
	                data:data.nationalsums
        		}]
        	});
        });
        	                    
    }
);
    //主页影讯动态部分
    $.ajax({
		type: "POST",
		url: "getMovieNews.action",
		dataType: "json",
		success: function(data){
			$('#movie_news').empty();
			var html = '';
			$.each(data.news, function(index, news){
				index+=1;
				if(index<=5){
					if(index==1){
						html += '<h5><p><strong>'+ news['title'] +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></h5>'+ news['date'] +'</p>';
					}else{
						html += '<p>'+ news['title'] +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ news['date'] +'</p>';
					}
				}else{
					return false;
				}
			});
			$('#movie_news').html(html);
		}
	});
    


});
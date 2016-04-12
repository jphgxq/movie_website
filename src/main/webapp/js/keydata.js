$(function() {
	
	$('#allmovie-info').dataTable({
		"ajax":{
			type:'POST',
			url:"getKeyDataMovie.action",
			dataType:"json",
		},
		"columns":[
		           {"data":"name"},
		           {"data":"director"},
		           {"data":"adaptor"},
		           {"data":"actor"},
		           {"data":"type"},
		           {"data":"display_date"},
		           {"data":"showing_time"},
		           {"data":"awards"},
		           {"data":"score"}
		]
	});
	
	$('#allactors-info').dataTable({
		"ajax":{
			type:'POST',
			url:"getKeyDataActor.action",
			dataType:"json",
		},
		"columns":[
		           {"data":"name"},
		           {"data":"info"},
		           {"data":"awards"},
		           {"data":"latest_works"},
		           {"data":"best_works"},
		           {"data":"cooperator"}
		]
	});
});
layui.define(['jquery'],function(exports){
	var $=layui.jquery;
  	var tool = {
		removeByValue:function(url,id){
			var index = layer.load(2);
			$.ajax({
				method:"get",
				url:url,
				success:function(data){
					setTimeout(function(){
						layer.close(index);
						$(id).html(data);
					},1000);
					
				}
			});
		}
  };
  
  exports('load', load);
});  
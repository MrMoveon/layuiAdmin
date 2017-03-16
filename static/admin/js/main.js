layui.use(['layer', 'form','element','jquery'], function(){
	var layer 	= layui.layer;
	var element = layui.element();
	var $=layui.jquery;
	var hideBtn=$('#hideBtn');
	var mainLayout=$('#main-layout');
	//监听导航点击
	element.on('nav(leftNav)', function(elem){
		var navA=$(elem).find('a');
		var id=navA.attr('data-id');
		var url=navA.attr('data-url');
		var text=navA.attr('data-text');
		
		var isActive=$('.main-layout-tab .layui-tab-title').find("li[lay-id="+id+"]");
		if(isActive.length>0){
			//切换到选项卡
			element.tabChange('tab', id);
			return;
		}else{
			var index = layer.load(2);
			//ajax 获取内容 创建tab
			$.ajax({
				type:"get",
				url:url,
				success:function(data){
					setTimeout(function(){
						layer.close(index);
						element.tabAdd('tab', {
						  title: text,
						  content: data,
						  id: id
						});  
						element.tabChange('tab', id);
					},1000);
					
				}
			});
			
		}
		           
		
	});
	//菜单隐藏显示
	hideBtn.on('click',function(){
		if(!mainLayout.hasClass('hide-side')){
			mainLayout.addClass('hide-side');
		}else{
			mainLayout.removeClass('hide-side');
		}
	})
	var index = layer.load(2);
	$.ajax({
		type:"get",
		url:scope.link,
		success:function(data){
			setTimeout(function(){
				layer.close(index);
				$('.layui-tab-item').eq(0).html(data);
			},1000);
			
		}
	});
});
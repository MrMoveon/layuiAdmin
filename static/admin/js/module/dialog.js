layui.define(function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var dialog = {
    /*确认框*/
	confirm:function(jsonData){
		layer.confirm(jsonData.message, {
		  btn: ['确定','取消']
		}, function(){
		  	jsonData.success && jsonData.success();
		},function(){
			jsonData.cancel && jsonData.cancel();
		});
	}
  };
  
  //输出test接口
  exports('dialog', dialog);
});  
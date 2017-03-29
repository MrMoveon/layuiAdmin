layui.define(['jquery', 'layer', 'dialog'], function(exports) {
	var $ = layui.jquery,
		dialog = layui.dialog,
		layer = layui.layer;
	var common = {
		/**
		 * 批量删除
		 * @param url       地址
		 * @param title     标题
		 */
		delAll: function(url, title) {
			dialog.confirm({
				message: title,
				success: function() {
					//删除逻辑
					var delArr = [];
					$('#table-list input[type="checkbox"]').each(function(index, item) {
						if(item.checked) {
							delArr.push(item.value);
						}
					});
					$.post(url, { id: delArr }, function(res) {
						if(res.status == 1) {
							layer.msg(res.message);
							setTimeout(function() {
								window.location.reload();
							}, 1000);
						} else {
							layer.msg(res.message);
						}
					}, 'json')
					$(document).ajaxError(function() {
						layer.msg('网络请求失败！');
					});
				}
			})
		},
		/**
		 * 批量排序
		 * @param url
		 * @param title
		 */
		listOrderAll: function(url, title) {
			dialog.confirm({
				message: title,
				success: function() {
					//更新逻辑
					var orderArr = [];
					var bBtn = false;
					$('#table-list input[name="listorder"]').each(function(index, item) {
						var val = item.value;
						var id = item.getAttribute('data-id');
						if($.trim(val) == null || !$.isNumeric(val)) {
							return bBtn = false;
						} else {
							orderArr.push({ id: id, listorder: val });
						}
						bBtn = true;
					})
					setTimeout(function() {
						if(bBtn) {
							$.post(url, { listorder: orderArr }, function(res) {
								if(res.status == 1) {
									layer.msg(res.message);
									setTimeout(function() {
										window.location.reload();
									}, 1000);
								} else {
									layer.msg(res.message);
								}
							}, 'json')
						} else {
							return layer.msg('排序数字不合法');
						}
					}, 10);
					$(document).ajaxError(function() {
						layer.msg('网络请求失败！');
					});
				}
			})
		},
		del: function(url, id) {
			dialog.confirm({
				'message': '确定要删除吗？',
				'success': function() {
					$.getJSON(url, { id: id }, function(res) {
						console.log(res);
						if(res.status == 1) {
							layer.msg(res.message);
							setTimeout(function() {
								window.location.reload();
							}, 1000);

						} else {
							layer.msg(res.message);
						}
					})
					layer.closeAll();
					$(document).ajaxError(function() {
						layer.msg('网络请求失败！');
					});
				},
				'cancel': function() {}
			});
		},
		/**
		 * 提示
		 * @param title
		 * @param obj
		 */
		tips: function(title, obj) {
			layer.tips(title, obj, {
				tips: [1, '#444c63'], //还可配置颜色
				time: 1000
			});
		}
	};

	exports('common', common);
});
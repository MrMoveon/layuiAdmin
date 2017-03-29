layui.define(['jquery'], function (exports) {
    var $ = layui.jquery;
    var tool = {
        /**
         * 移除数组的值
         * @param arr   数组
         * @param val   删除的值
         */
        removeByValue: function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        },
        /**
         * 转义字符，防止xxs
         * @param str
         * @returns {string}
         */
        stringEncode:function (str){
            var div=document.createElement('div');
            if(div.innerText){
                div.innerText=str;
            }else{
                div.textContent=str;//Support firefox
            }
            return div.innerHTML;
            }
        };

    exports('tool', tool);
});  
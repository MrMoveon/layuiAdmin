layui.define(function(exports){
    var formate = {
        /**
         * 获取当前的日期函数
         * 传入一个时间戳,如果不传则为当前时间
         * 注意：如果是uinx时间戳记得乘于1000, 比如php函数time()获得的时间戳就要乘于1000
         * @type String timestamp 要转换的时间戳格式 1469504554276
         * @returns {String} 日期格式: 2016-07-26 10:55:38
         */
        ge_time_format:function(timestamp){
            if(timestamp){
                var date = new Date(timestamp*1000);
            }else{
                var date = new Date();
            }
            Y = date.getFullYear(),
                m = date.getMonth()+1,
                d = date.getDate(),
                H = date.getHours(),
                i = date.getMinutes(),
                s = date.getSeconds();
            if(m<10){
                m = '0'+m;
            }
            if(d<10){
                d = '0'+d;
            }
            if(H<10){
                H = '0'+H;
            }
            if(i<10){
                i = '0'+i;
            }
            if(s<10){
                s = '0'+s;
            }
            var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
            return t;
        },
        /**
         * 日期函数转为时间戳格式
         * 传入一个日期时间格式,如果不传入就是获取现在的时间了
         * @type String strtime 要转换的日期时间格式 2016-07-26 10:55:38
         * @return {String} 时间戳格式: 1469504554276
         */
        get_unix_time_stamp:function (strtime) {
            if(strtime){
                var date = new Date(strtime);
            }else{
                var date = new Date();
            }
            time1 = date.getTime();   //会精确到毫秒---长度为13位
            //time2 = date.valueOf(); //会精确到毫秒---长度为13位
            //time3 = Date.parse(date); //只能精确到秒，毫秒将用0来代替---长度为10位
            return time1;
        }
    };

    //输出test接口
    exports('formate', formate);
});




;(function(loli,av,$){
    "use strict";
    loli.avalon = {};
    avalon.mix(loli.avalon,av);

    loli.avalon.define = function(param){
        var setting = {};
        // 只接收 固定的参数;
        setting.$id = param.$id;
        setting.view = param.view;
        setting.model = param.model;
        setting.event = param.event;
        
        var model = av.define(setting);
        // 对model 做封装
        model.model.sent = function(url,data){
            data = data || this.$model;
            console.log(url,data);
            $.ajax({
                url : url,
                data : data
            });
        };
        return model;
    };

    console.log(loli.avalon);

})(loli,avalon,jQuery);
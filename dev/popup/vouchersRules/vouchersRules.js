'use strict';
define(['module', 'common/kernel/kernel'], function(module, kernel){
    var thispopup = module.id.replace(/^[^/]+\/|\/[^/]+/g, '');
     
    return {
        //如果指定了这个方法则需要在其中调用kernel.showPopup(thispopup)来显示此弹窗
        open: function(param){
            kernel.showPopup(thispopup, param);
        },
        onload:function(param){
            
            //opening this popup
            //return true can stop opening this popup
            //return true;
        },
        onloadend: function(){
            //this popup is open
        },
        onunload: function(){
            //closing this popup
            //return true can stop closing this popup
            //return true;
        },
        onunloadend: function(){
            //this popup is closed
        }
    }
});
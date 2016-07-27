'use strict';
define(['module', 'common/kernel/kernel', 'common/vue/vue'], function(module, kernel, Vue) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#page>.content>.' + thispage);
	kernel.scrollReload(dom);
	return {
		onload: function(force) {
			var detailTitle = document.querySelector('.header>.title');
			detailTitle.innerText="新手专享10号P";
			 var vm = new Vue({
			 	el:'#page',
			 	data:{
			 		apr:'12.80'
			 	}
			 });

		},
		onloadend: function() {
			
		},
        onunload: function() {
            //leveing this page
        },
        onunloadend: function() {
            //left this page
        }
        // 除以上事件外还可包含以下属性
		// * onleftmenuclick 左上角dom点击事件
		// * leftMenuDomContent 左上角dom对象, 字符串表示只显示相应文本
		// * onrightmenuclick 右上角dom点击事件
		// * rightMenuDomContent 右上角dom对象, 字符串表示只显示相应文本
	};
});
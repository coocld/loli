'use strict';
define(['module', 'common/kernel/kernel'], function(module, kernel) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#page>.content>.' + thispage);
	kernel.scrollReload(dom);
	var iconTop = document.getElementsByClassName('sort-top');
	var iconBot = document.getElementsByClassName('sort-bot');
	for(var i=0; i<iconTop.length; i++){
		iconTop[i].appendChild(kernel.makeSvg('angle-up'));
		iconBot[i].appendChild(kernel.makeSvg('angle-down'));
	}
	return {

		onload: function(force) {

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
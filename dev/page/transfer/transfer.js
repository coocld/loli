'use strict';
define(['module', 'common/kernel/kernel', 'common/vue/vue' ,'common/zepto/zepto'], function(module, kernel, Vue, zepto) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#page>.content>.' + thispage);
	kernel.scrollReload(dom);

	$(".calculator-icon").append(kernel.makeSvg('calculator'));
	var tradePopupHtml = $(".trade-password-box").html();

	return {
		onload: function(force) {
			
			//kernel.hint("最低10,000元起投哦");
			//kernel.htmlDialog("<div class='popup-rule'><h1>计算方式</h1><p>1、转让价格=转让本金+应得收益+(－)涨价(降价)；应得收益每日增加，转让价格随之变化；</p><p>2、手续费由转出方承担，转出方实际收款=转让价格－手续费；</p><p>3、转让价格=转让本金+应得收益+(－)涨价(降价)；应得收益每日增加，转让价格随之变化；</p><p>4、手续费由转出方承担，转出方实际收款=转让价格－手续费。</p></div>");
			//console.log(kernel.location.args.uid);
			kernel.htmlDialog(tradePopupHtml);
		},
		onloadend: function() {
			
		},
        onunload: function() {
            //leveing this page
        },
        onunloadend: function() {
            //left this page
        },
        // 除以上事件外还可包含以下属性
		// * onleftmenuclick 左上角dom点击事件
		// * leftMenuDomContent 左上角dom对象, 字符串表示只显示相应文本
		// * onrightmenuclick 右上角dom点击事件
		// * rightMenuDomContent 右上角dom对象, 字符串表示只显示相应文本

	};
});
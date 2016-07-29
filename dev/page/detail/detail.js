'use strict';
define(['module', 'common/kernel/kernel', 'common/vue/vue' ,'common/zepto/zepto'], function(module, kernel, Vue) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#page>.content>.' + thispage),
		angleUp = document.getElementsByClassName('icon-angle-up'),
		panelBtn = $(".detail-panel-hd");
	kernel.scrollReload(dom);
	for(var i=0; i<angleUp.length; i++){
		angleUp[i].appendChild(kernel.makeSvg('angle-down'));
	}
	
	return {
		onload: function(force) {
			var detailTitle = $('#page > .header > .title');
			detailTitle.text("新手专享11号P");
			 var vm = new Vue({
			 	el:'#page',
			 	data:{
			 		apr:'12.80'
			 	}
			 });
			 panelBtn.tap(function(){
			 	$(this).next(".detail-panel-bd").toggle();
			 	if($(this).next(".detail-panel-bd").css('display')=="none"){
			 		$(this).children(".icon-angle-up").css({transform:'rotate(0deg)'});
			 	}else if($(this).next(".detail-panel-bd").css('display')=="block"){
			 		$(this).children(".icon-angle-up").css({transform:'rotate(180deg)'});
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
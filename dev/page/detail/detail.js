'use strict';
define(['module', 'common/kernel/kernel', 'common/vue/vue' ,'common/zepto/zepto'], function(module, kernel, Vue, zepto) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#page>.content>.' + thispage),
		angleUp = $('.icon-angle-up'),
		panelBtn = $(".detail-panel-hd"),
		questionIcon = $(".question-circle-o"),
		angleRightIcon = $(".angle-right-icon"),
		n = 0;
	kernel.scrollReload(dom);
	
	angleUp.append(kernel.makeSvg('angle-down'));
	questionIcon.append(kernel.makeSvg('question-circle-o'));
	angleRightIcon.append(kernel.makeSvg('angle-right'));

	$(".coupons-qustion-btn").on('tap', function() {
		kernel.openPopup('vouchersRules', ++n);
	}, false);
	$(".coupons-btn").on('tap', function() {
		kernel.openPopup('chooseVouchers', ++n);
	}, false);
	
	return {
		onload: function(force) {
			$(".rightMenuBtn").append('<span class="lona-type-icon">固定收益</span>').show();
			var detailTitle = $('#page > .header > .title');
			detailTitle.text("新手专享11号P");
			 var vm = new Vue({
			 	el:'#page',
			 	data:{
			 		apr:'15.80'
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
			

			$(".investment-btn").on('tap', function(){
				kernel.htmlDialog('<div class="balance-no"><p>您的可用资金不足</p><div class="btn-box"><a class="close-btn" href="javascript:;">再看看</a><a class="recharge-btn" href="javascript:;">去充值</a> </div></div>');
				$(".close-btn").on('tap', function(){
					kernel.closeDialog();
				});
				$(".recharge-btn").on('tap', function(){
					kernel.closeDialog();
					window.location.href='/#!list';
				});
			})
			
			

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
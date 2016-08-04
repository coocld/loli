'use strict';
define(['module', 'common/kernel/kernel', 'common/zepto/zepto'], function(module, kernel, zepto) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#loan-container');
	var refType = true;
	function addDom(){
		alert("刷新ddd1");
		refType = true;
	};
	kernel.scrollReload(dom);
	dom.addEventListener('scroll',function(){
		if(this.scrollTop + this.clientHeight >= kernel.getScrollHeight(this)){
			if(refType){
				refType = false;
				setTimeout(addDom,1000);
			}
			
		}
	})
	 
	var iconTop = document.getElementsByClassName('sort-top');
	var iconBot = document.getElementsByClassName('sort-bot');
	var circle = document.getElementsByClassName('circle');
	var tabBtn = $(".loan-tab-title a");
	var perimeter = Math.PI * 2 * 40;
	for(var i=0; i<iconTop.length; i++){
		iconTop[i].appendChild(kernel.makeSvg('angle-up'));
		iconBot[i].appendChild(kernel.makeSvg('angle-down'));
	};
	//预期年化排序
			$(".sort-item-apr").on('tap',function(){
				if($(this).attr("class")=="sort-item sort-item-apr ndb-apr ndb-apr-desc"){
					$(this).attr("class","sort-item sort-item-apr ndb-apr ndb-apr-asc");

				}else if($(this).attr("class")=="sort-item sort-item-apr ndb-apr ndb-apr-asc"){
					$(this).attr("class","sort-item sort-item-apr ndb-apr ndb-apr-desc");

				}
			})

	return {

		onload: function(force) {
			for(var i=0; i<circle.length; i++){

			circle[i].setAttribute('stroke-dasharray', 252 * 0.4 + " " + 252);
			};

			tabBtn.on("tap",function(){
				tabBtn.removeClass("cur");
				$(this).addClass("cur");
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
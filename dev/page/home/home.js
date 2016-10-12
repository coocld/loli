'use strict';
define(['module', 'common/kernel/kernel', 'common/touchslider/touchslider', 'common/zepto/zepto'], function(module, kernel, touchslider, zepto) {
	var thispage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = document.querySelector('#page>.content>.' + thispage),
		banner = touchslider(dom.querySelector('.banner'));

	kernel.fixIosScrolling(dom);
	banner.onchange = function() {
		dom.querySelector('.nav').firstChild.data = navFormat(this.current, this.children.length);
	};
	var i, tmp,
		imgs = [{
			img: 'https://m.yiqihao.com/public/upload/img/banner/39d45d05788aa669f997.jpg',
			href: 'https://m.taobao.com',
			bg: '#ccc'
		}, {
			img: 'https://m.yiqihao.com/public/upload/img/banner/dcf2e8a5788a93ab38e7.jpg',
			href: 'https://m.baidu.com/',
			bg:'#ccc'
		}, {
			img: 'https://m.yiqihao.com/public/upload/img/banner/dcf2e8a5788a93ab38e7.jpg',
			href: 'https://www.apple.com',
			bg:'rgba(0,0,0,0.8)'
		}];
	for (i = 0; i < imgs.length; i++) {
		tmp = document.createElement('a');
		tmp.className = 'item';
		tmp.href = 'javascript:;';
		tmp.style.backgroundImage = 'url(' + imgs[i].img + ')';
		tmp.style.backgroundColor = imgs[i].bg;
		showForeign(tmp, imgs[i].href);
		banner.add(tmp);
	}
	banner.onchange();

	return {
		onload: function(force) {
			banner.startPlay(10000);
			
		},
		onunload: function() {
			banner.stopPlay();
		}
	};

	function navFormat(t, num) {
		var a = '●',
			b = '○',
			txt = '';
		for (var i = 0; i < num; i++) {
			txt += (i === t) ? a : b;
		}
		return txt;
	}

	function showForeign(o, url) {
		o.addEventListener('click', function(evt) {
			kernel.showForeign(url);
		}, false);
	}
});
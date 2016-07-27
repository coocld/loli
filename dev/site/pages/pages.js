//pages
//路由配置
'use strict';
define({
	'home': {
		'js': 'home', // 主调js
		'html': 'home.html',
		'css': 'home.less', // 主调css
		'title': '精心优选' // 标题
	},
	'list': {
		'js': 'list',
		'html': 'list.html',
		'css': 'list.less',
		'title': '我要投资',
		'back': 'home'
	},
	'detail': {
		'js': 'detail',
		'html': 'detail.html',
		'css': 'detail.less',
		'title': '投资详情',
		'back': 'list'
	},
	'user': {
		'html': 'user.html',
		'css': 'user.less',
		'title': '我的资产',
		'back': 'list'
	},
	'settings': {
		'js': 'settings',
		'html': 'settings.html',
		'css': 'settings.less',
		'title': '更多',
		'back': 'user'
	}
});

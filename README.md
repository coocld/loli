#  提示  

数据绑定：vueJs   

css库：https://weui.io/#/    

#  环境安装

```
node - 6.x

启服务
npm -g install devProxy

打包工具
npm -g install siteBuild@0.2.6

依赖安装
npm -g install uglify-js@2.7.3
(删除sitebuld里的uglifyjs)
```

# mjia




```

打包到all.js只需要相应的文件添加到combine或者combine.cmd的命令行中，到framework文件中，执行./combine

node有更新可以直接用npm -g update
 
svg图标 fontawesome: http://fontawesome.io/icons/

onleftmenuclick : '#!lixnk'   左上角dom点击事件
leftMenuDomContent : dom  左上角dom对象, 字符串表示只显示相应文本
onrightmenuclick : '#link'   右上角dom点击事件
rightMenuDomContent : dom   右上角dom对象, 字符串表示只显示相应文本

kernel.location.args.lid 获取url参数

kernel.hint("最低10,000元起投哦");   //显示提示5秒消失
kernel.htmlDialog("<div class='popup-rule'><h1>计算方式</h1><p>1、转让价格=转让本金+应得收益+(－)涨价(降价)；应得收益每日增加，转让价格随之变化；</p></div>");  //html自定义弹窗
kernel.confirm("恭喜您，转让申请已成功提交！"); 带确认按钮弹框
.alert("一百年");  模拟alert，不带确认按钮

```



问题：
1、 -webkit-overflow-scrolling: touch;

2、font-size:14px;

3、banner  item｛background-size: contain;
 +       改成 background-size: cover;｝

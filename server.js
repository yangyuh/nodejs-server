// vue HTML5 History 模式express 中间件
var history = require('connect-history-api-fallback');
var express = require('express');
var path = require('path');
var app = express();
app.use(history());
//在express中使用的时候需要注意一点的是，该中间件必须要放在express.static中间前的前面引入
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(3001,function(){
	console.log("server start in 3001" )
})



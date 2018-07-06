var express = require('express');
var app = express();

// 마운트 경로가 없는 미들웨어 함수, 앱이 요청을 수신할 때마다 시랭
/*app.use(function(req, res, next){
    console.log('Time:', Date.now());
    next();
});
*/

// /user/:id경로에 마운트되는 미들웨어 함수
/*app.use('/user/:id', function(req, res, next){
    console.log('Request Type:', req.method); // GET
    next();
});

app.get('/user/:id', function(req, res, next){
    res.send('USER');
});
*/


// 하나의 마운트 경로를 통해 일련의 미들웨어 함수를 하나의 마운트 위치에 로드
/*app.use('/user/:id', function(res, req, next){
    console.log('Request URL:', req.originalUrl);
    next();
}, function(req, res, next){
    console.log('Request Type:', req.method);
    next();
});*/


// 라우트 핸들러를 이용하면 하나의 경로에 대해 여러 라우트를 정의
/*app.get('/user/:id', function(req, res, next){
    console.log('ID:', req.params.id);
    next();
}, function(req, res){
    res.send('User Info');
});*/
// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function(req, res, next){
    res.send(req.params.id);
});



app.listen(3000);
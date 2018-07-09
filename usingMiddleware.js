var express = require('express');
var app = express();

// 마운트 경로가 없는 미들웨어 함수, 앱이 요청을 수신할 때마다 시행
/*app.use(function(req, res, next){
    console.log('Time:', Date.now());
    next();
});*/


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
/*app.get('/user/:id', function(req, res, next){
    res.send(req.params.id);
});*/


// 라우터 미들웨어 스택의 나머지 미들웨어 함수들을 건너띄려면 next('roter')를 호출하여 제어를 그 다음 라우트로 전달.
// 참고 : next('route')는 app.METHOD() 또는 router:METHOD() 함수를 이용해 로드된 미들웨어 함수에서만 작동
// 다음 예 : /user/:id 경로에 대한 GET 요청을 처리하는 미들웨어 하위 스택이 표시
/*app.get('/user/:id', function(req, res, next){
    console.log('req.params', req.params);
    // if the user ID is 0, skip to the next route
    if(req.params.id == 0) next('route');
    // otherwise pass the control to the next middleware function in this tack
    else next();
}, function(req, res, next){
    // render a reqular page
    res.send('regular');
});*/


/*
var usingMiddlewareRouter = require('./usingMiddleware-router');
app.use('/usingMiddleware-router', usingMiddlewareRouter);*/


/* 오류 처리 미들웨어 */
/*
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
*/


/* 기본 제공 미들웨어 */
/*
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensiong: ['htm', 'html'],
    index: false,
    maxAge: 'id',
    redirect: false,
    setHeaders: function(res, path, stat){
        res.set('x-timestamp', Date.now());
    }
}
app.use(express.static('public'), options);

// 하나의 앱은 2개 이상의 정적 디렉토리를 가질 수 있다.
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('files'));
*/

/* 써드파티 미들웨어 */
/*
// npm install cookie-parse
var cookieParser = require('cookie-parser');

// load the cooke parsing middleware
app.use(cookieParser);*/


app.listen(3000);
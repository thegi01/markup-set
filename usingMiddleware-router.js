/* 라우터 레벨 미들웨어 */
// 라우터 레벨 미들웨어는 express.Route() 인스턴스에 바인드된다는 점을 제외하면 애플리케이션 레벨 미들웨어와 동일한 방식으로 작동

var express = require('express');
var app = express();

// router.use() 및 router.METHOD() 함수를 사용하여 라우터 레벨 미들웨어를 로드하십시오.
// 다음 예의 코드는 위에서 애플리케이션 레벨 미들웨어에 대해 표시된 미들웨어 시스템을 라우터 레벨 미들웨어를 사용하여 복제
var router = express.Router();

// a middleware functin with no mount path, This code is executed for every request to the router
router.use(function(req, res, next){
    console.log('Time', Date.now());
    next();
});

// a middleware sub-stack shows request info for anu type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next){
    console.log('Request URL:', req.originalUrl);
    next();
}, function(req, res, next){
    console.log('Request Type:', req.method);
    next();
});

// a middeware sub-stack that ahndles GET requets to the /user/:id path
router.get('/user/:id', function(req, res, next){
    // if the user ID is 0, skip to the next roter
    if(req.method.id == 0) next('route');
    // otherwise pass control to the next middleware function in this stack
    else next();
}, function(req, res, next){
    console.log(req.params.id);
    res.render('special');
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function(req, res, next){
    console.log(req.params.id);
    res.render('special');
})

// mount the router on th app
app.use('/', router);


app.listen(3000, function(){
    console.log('Listening on prot 3000!')
});


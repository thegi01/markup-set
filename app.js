var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('Hello World!');
});

/*app.post('/', function(rq, res){
    res.send('Got a POST requets');
});

app.put('/user', function(req, res){
    res.send('Got a PUT request at /user');
});

app.delete('/user', function(req, res){
    res.send('Got a DELETE request at /user');
});
*/


/* 라우트 핸들러 */

// 하나의 콜백함수는 하나의 라우트를 처리할 수 있다.
app.get('/example/a', function(req, res){
    res.send('Hello from A!');
});

// 2개 이상의 콜백함수는 하나의 라우트를 처리할 수 있다.(next 오브젝트를 반드시 지정해야한다.)
app.get('/example/b', function(req, res, next){
    console.log('The response will be seet by the next function ...');
    next();
}, function(req, res){
    res.send('Hello from B!');
});


// 하나의 콜백 함수 배열은 하나의 라우트를 처리할 수 있다.
var cb0 = function(req, res, next){
    console.log('CB0');
    next();
}
var cb1 = function(req, res, next){
    console.log('CB1');
    next();
}
var cb2 = function(req, res){
    res.send('Hello from C');
}
app.get('/example/c', [cb0, cb1, cb2]);

// 독립적인 함수와 함수 배열의 조합은 하나의 라우트를 처리할 수 있다.
var cb20 = function(req, res, next){
    console.log('CB20');
    next();
}
var cb21 = function(req, res, next){
    console.log('CB21');
    next();
}
app.get('/example/d', [cb20, cb21], function(req, res, next){
    console.log('The response will be sent by the next function...')   ;
    next();
}, function(req, res){
    res.send('Hello from D!');
})


/* app.route() */
app.route('/book')
    .get(function(req, res){
        res.send('Get a random book');
    })
    .post(function(req, res){
        res.send('Add a book');
    })
    .put(function(req, res){
        res.send('Update the book');
    });


/* express.Router */
var birds = require('./birds');
app.use('/birds', birds);



app.listen(3000, function(){
    console.log('Example ap listening on prot 3000!')
});
var express = require('express');
var app = express();
var router = require('./router/views')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use( express.static('public') );
app.use( express.static('data') );

var server = app.listen(3000, function(){
    console.log('Express server ahs started on port 3000');
});


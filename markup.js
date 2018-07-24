var express = require('express');
var app = express();
var router = require('./router/markup')(app);

app.set('views', __dirname + '/markup/html');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


/*var sass = require('node-sass');
var result = sass.renderSync({
    file: './html/scss/style.scss',
    outputStyle: 'compressed',
    outFile:'./public/css/style.css',
    sourceMap: true,
    importer: function(url, prev, done){
        someAsyncFunction(url, prev, function(result){
            done({
                file: result.path,
                contents: result.data
            });
        });
    }
});

console.log('css', result.css);
console.log('map', result.map);
console.log('stats', result.stats);*/


var server = app.listen(3300, function(){
    console.log('Express server has started on port 3300');
});

app.use(express.static('public'));

/* https://medium.com/valtech-design/using-npm-scripts-to-run-node-sass-443b031b02a */
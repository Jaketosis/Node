

var express = require('express');
var path = require('path');
var gallery =require('./galleries/gallery');

var app = express();

app.get('/galleries',gallery.index);
app.post('/add_gallery',gallery.add_gallery);

const views_path = path.join(__dirname, 'views');
const static_path = path.join(__dirname, '/statichtml');
var http = require('http'),
    fs = require('fs');

app.set('view engine', 'hbs');
app.set('views', views_path);

const app = express();

app.get('./','gallery.index')


app.get('/',(req,res)=>{

    // fs.readFile('statichtml/geekhacked.html', function(err, data) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       // Successful file read
    //     }
    //   });

});

const port = process.env.PORT || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp", __dirname); 

});


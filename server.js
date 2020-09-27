

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('port',process.env.PORT || 8000);
//onst port = process.env.PORT || 8000;

var aws = require('aws-sdk');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
    })
);

var path = require('path');
// var gallery =require('./galleries/gallery');

app.get('/',function (req,res){
    res.render('gallery')
})
const port = process.env.PORT || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp", __dirname); 

});

// app.get('/galleries',gallery.index);
// app.post('/add_gallery',gallery.add_gallery);

// const views_path = path.join(__dirname, 'views');
// const static_path = path.join(__dirname, '/statichtml');
// var http = require('http'),
//     fs = require('fs');

// app.set('view engine', 'hbs');
// app.set('views', views_path);

// const app = express();

// app.get('./','gallery.index')


// app.get('/',(req,res)=>{

//     // fs.readFile('statichtml/geekhacked.html', function(err, data) {
//     //     if (err) {
//     //       throw err;
//     //     } else {
//     //       // Successful file read
//     //     }
//     //   });

// });




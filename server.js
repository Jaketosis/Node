const express = require('express');
const path = require('path');
const app = express();
const views_path = path.join(__dirname, 'views');
const static_path = path.join(__dirname, '/statichtml')
var http = require('http'),
    fs = require('fs');

app.set('view engine', 'hbs');
app.set('views', views_path);


app.use(express.static(static_path));
app.get('/',(req,res)=>{

    //res.send(${});

});

const port = process.env.PORT || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp", __dirname); 

});


const express = require('express');
const app = express();

var http = require('http'),
    fs = require('fs');



app.use(express.static("./statichtml"));
app.get('/',(req,res)=>{

    //res.send(${});

});

const port = process.env.PORT || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp", __dirname); 

});


const express = require('express');
const app = express();

var http = require('http'),
    fs = require('fs');



    
app.get('/',(req,res)=>{

    res.send('./geekhacked.html');

});

const port = process.env.PORT || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp"); 

});


const express = require('express');
const app = express();

var http = require('http'),
    fs = require('fs');




app.get('/',(req,res)=>{

    app.use(express.static("./statichtml/geekhacked.html"));

});

const port = process.env.PORT || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp", __dirname); 

});


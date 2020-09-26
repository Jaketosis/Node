const express = require('express');
const app = express();

app.get('/',(req,res)=>{

    res.send('welcome to the home page baby');

});

const port = process.env.port || 8000;
app.listen(port, ()=> {

    console.log("Wazzapppp"); 

});


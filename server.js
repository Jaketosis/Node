
console.log('starting, checkpoint 0')
var path = require('path');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { database } = require('./database')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'postgres',
    'jakemarsh',
    'Sephiroth!1',
    {
      host:'database-2.c2xa1utqjm6r.us-east-2.rds.amazonaws.com',
        dialect: 'postgres',
    },
);


const app = express();

//old code, delete soon
// const db = require('./queries')


app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('port',process.env.PORT || 8000);
//onst port = process.env.PORT || 8000;

var aws = require('aws-sdk');

// app.use(express.static('public'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
       res.status(500).send({ error: 'Something failed!' })
     } else {
       next(err)
    }
}

app.use(clientErrorHandler);


sequelize

.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});











app.use('/services', require('./services'))

app.get('/',function (req,res){
    res.render('gallery')
})


const port = process.env.PORT || 8080;
database.sync().then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      
  
    })
  })
// app.get('/items', db.getItems)
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




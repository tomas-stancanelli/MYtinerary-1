const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = express.Router();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => res.send("Hola gatito, estoy en el puerto 5000 wacho"));

app.use('/', router);

app.get('/test', (req, res) => res.send("funciona ameo"));

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });


const port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient
    var ObjectID = require('mongodb').ObjectID; // we will use this later
    
    mongoose.connect('mongodb+srv://carellomartino:careCARE9900@mycluster-1o7tp.mongodb.net/test?retryWrites=true&w=majority', (err, db) => {
      var dbase = db.db("MYtinerary");

      app.listen(port, () => console.log(`server running on port ${port}`))

      app.post('/name/add', (req, res, next) => {
    
        var name = {
          first_name: req.body.first_name,
          last_name: req.body.last_name
        };
    
        dbase.collection("cities").save(name, (err, result) => {
          if(err) { 
            console.log(err);
          }
    
          res.send('name added successfully');
        });
      });
    })

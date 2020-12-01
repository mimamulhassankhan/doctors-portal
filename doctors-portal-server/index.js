const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@programming-hero.eg1nk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const appointmentCollection = client.db("HospitalManagementSystem").collection("appointments");
  const serviceCollection = client.db("HospitalManagementSystem").collection("services");
  
  app.post('/addAppointment', (req, res) => {
      const appoinment = req.body;
      appointmentCollection.insertOne(appoinment)
      .then((result) => {
            res.send(result.insertedCount > 0);
      })
  })

  app.get('/getPatients', (req, res) => {
    appointmentCollection.find({ $query: {}, $orderby: { bookTime : 1 } })
    .toArray((err, documents) => {
      res.send(documents);
    })
  })

  app.post('/addServices', (req, res) => {
    const services = req.body;
    serviceCollection.insertOne(services)
    .then((result) => {
      res.send(result.insertedCount > 0);
    })
  })

  app.get('/getServices', (req, res) => {
    serviceCollection.find({})
    .toArray((err, documents) => {
      res.send(documents);
    })
  })

});



app.get('/', (req, res) => {
  res.send('Hello Hospital Management System!')
})

app.listen(process.env.PORT || 5000)
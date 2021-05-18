const express = require('express')
const cors = require("cors");
const formhibrid = require('../routes/ticket.Route');

const app = express();
const port = process.env.PORT || 5000
const corsOptions = { origin: "http://localhost:8081" };

require('dotenv').config()

//app.set('view engine', 'engine')

app.use(cors(corsOptions)); 

app.use(express.json());

app.use('/form', formhibrid);

app.listen(port , ()=> console.log('> FormHibrid API Server is up and running on port : ' + port))
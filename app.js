const { Console } = require('console')
const express = require('express')
const app = express()

const port = 3002

const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3002', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json(bodyParser))

app.use( express.static('views'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false })); 

app.use('/', require('./routes/homepage'))

app.listen(port, ()=>{console.log(`Server connected to port ${port}`)})
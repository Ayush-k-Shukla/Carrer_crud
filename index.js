require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.set('useCreateIndex',true) ;

const con = mongoose.connection

con.on('error', (err)=> {console.log('connection error:', err)});
con.once('open', ()=> {
  console.log("Connected to mongodb")
});


const routers = require('./routes/routes')
app.use('/', routers)

const port = process.env.PORT || 8000
app.listen(port,()=>{console.log(`server started on port ${port}`)})
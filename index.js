const express = require('express');
const app = express();
const cors = require("cors");
const request = require('request');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded())


app.get('/tags/:q',(req,res)=>{
const data =  req.params.q;

const options = {
    method: 'GET',
    url: 'https://rapidtags.io/api/generator',
    qs: {query: data, type: 'YouTube'},
    headers: {Accept: '*/*'}
  };
  
  request(options, function (error, response, body) {
   if (error) {
    res.status(401).json({error:"Server Error"})
    return false;
   }
    res.status(200).json(body)
  });



  
})


app.listen(4000,()=>{
    console.log('server start');
})
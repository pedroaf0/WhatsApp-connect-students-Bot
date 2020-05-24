const express = require('express');
const cors = require('cors');
const db = require('./database/db');
const { ResponseDb } = require('./ResponseDb');


const { google } = require('googleapis');
require('dotenv').config();

const {SID , KEY, APIKEY, CX} = process.env
const client = require('twilio')(SID, KEY); 

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());


app.use(async (req, res, next) => {

  const { Body, To, From} = req.body;

  console.log({ Body, To, From});

  const  funcao  = await db('numeros').where('numero', From.split(":")[1]).select('callback');
  function get() {
    try {
      console.log(funcao[0].callback)
      const callback = eval(funcao[0].callback)(Body, From);
      console.log(callback)
      const { condicao, contexto } =  callback;
      return { condicao, contexto };
    } catch (error) {
      console.log(error)
      const condicao = 'pre_registro';
      const contexto = 'nome';
      return { condicao, contexto };
    }

}
const { condicao, contexto } = get()
console.log({ condicao, contexto });
try {
  const response =await ResponseDb[condicao][contexto](From.split(":")[1]);
console.log(response);
  client.messages 
  .create({ 
     body: response, 
     from: To,       
     to:  From
   }) 
  .then(message => console.log(message.sid)).done();
  res.write('200')
  res.end();
} catch (error) {
  client.messages 
  .create({ 
     body: error, 
     from: To,       
     to:  From
   }) 
  .then(message => console.log(message.sid)).done();
  res.write('200')
  res.end();
}
 


  const options = {
    q: req.body.Body,
    auth: APIKEY,
    cx: CX
  };
  const customsearch = google.customsearch('v1');
  const result = await customsearch.cse.list(options);
  const firstResult = result.data.items[0];
  const searchData = firstResult.snippet;
  const link = firstResult.link;



});



app.listen(PORT, () => console.log(`App Listening on port ${PORT}`));


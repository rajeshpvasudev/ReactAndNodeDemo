const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const data = require('./data/employees.json');

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express API' });
});

app.get('/api/employees',(req,res) =>{
  res.send(
    data
  )
})

app.listen(port, () => console.log(`Listening on port ${port}`));
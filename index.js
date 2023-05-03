const express = require('express')
const app = express()
const port = 5000;

const chefdata = require('./data/chefdata.json')

app.get('/', (req, res) => {
    res.send('chef recipe server is running')
  })

  app.get('/chefdata', (req, res) => {
    res.send(chefdata);
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
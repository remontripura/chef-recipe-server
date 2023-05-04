const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000;

const chefdata = require('./data/chefdata.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('chef recipe server is running')
  })

  app.get('/chefdata', (req, res) => {
    res.send(chefdata);
  })

  app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefdata.find(n => n.id == id)
    res.send(selectedChef)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
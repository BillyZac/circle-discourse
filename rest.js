// A REST service exposing a list of Discourse users and their groups

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const getUsersAndTheirGroups = require('./getUsersAndTheirGroups')

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser())

app.get('/', (req, res) => {
  console.log('Request received')
  getUsersAndTheirGroups()
    .then(users => {
      res.send(users)
    })
})

// A stub for testing the queue script
app.post('/queue', (req, res) => {
  console.log('Received an action', req.body);
  res.end()
})

app.listen(app.get('port'), () => {
  console.log('Listening on', app.get('port'));
})

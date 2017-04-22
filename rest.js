// A REST service exposing a list of Discourse users and their groups

const express = require('express')
const app = express()
const getUsersAndTheirGroups = require('./getUsersAndTheirGroups')

app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
  console.log('Request received')
  getUsersAndTheirGroups()
    .then(users => {
      res.send(users)
    })
})

app.listen(app.get('port'), () => {
  console.log('Listening on', app.get('port'));
})

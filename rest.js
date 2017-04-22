// A REST service exposing a list of Discourse users and their groups

const express = require('express')
const app = express()
const getUsersAndTheirGroups = require('./getUsersAndTheirGroups')

app.get('/', (req, res) => {
  console.log('Request received')
  getUsersAndTheirGroups()
    .then(users => {
      res.send(users)
    })
})

app.listen(3000)
console.log('listening on 3000');

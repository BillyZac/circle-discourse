const unirest = require('unirest')
require('dotenv').config()
const low = require('lowdb')

const db = low('db.json')
db.defaults({ users: [] })
  .value()

const baseUri = process.env.DISCOURSE_BASE_URI

const usersEndpoint = `/admin/users/list/active.json?api_key=${process.env.DISCOURSE_API_KEY}&amp;api_username=${process.env.DISCOURSE_USER_NAME}`
unirest('GET', baseUri + usersEndpoint, function(result, error) {
  if (error) throw error

  result.body.forEach(user => {
    db.get('users')
    .push({
      discourseId: user.id,
      username: user.username,
      email: user.email,
      admin: user.admin,
    })
      .value()
  })
})

// const groupsEndpoint = `/admin/users/list/active.json?api_key=${process.env.DISCOURSE_API_KEY}&amp;api_username=${process.env.DISCOURSE_USER_NAME}`
// unirest('GET', baseUri + groupsEndpoint, function(result) {
//   result.body.forEach(user => {
//     db.get('users')
//     .push({
//       discourseId: user.id,
//       username: user.username,
//       admin: user.admin,
//     })
//       .value()
//   })
// })
//

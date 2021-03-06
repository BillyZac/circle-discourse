const request = require('superagent')
require('dotenv').config()

const getGroups = require('./getGroups')

const baseUri = process.env.DISCOURSE_BASE_URI
const usersEndpoint = `/admin/users/list/active.json?api_key=${process.env.DISCOURSE_API_KEY}&amp;api_username=${process.env.DISCOURSE_USER_NAME}`
const usersUri = baseUri + usersEndpoint

const getUsersAndTheirGroups = () => {
  return request
    .get(usersUri)
    .then(response => {
      const users = response.body
      return users
    })
    .then(users => Promise.all(users.map(getGroups)))
    .catch(error => {
      console.log('There was an error in getUsersAndTheirGroups');
      console.log(error);
      return 'There was an error in getUsersAndTheirGroups'
    })
}

module.exports = getUsersAndTheirGroups

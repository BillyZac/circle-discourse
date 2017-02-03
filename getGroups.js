const request = require('superagent')
require('dotenv').config()
const baseUri = process.env.DISCOURSE_BASE_URI

const getGroups = user => {
  const userEndpoint = `/users/${user.username}.json?api_key=${process.env.DISCOURSE_API_KEY}&amp;api_username=${process.env.DISCOURSE_USER_NAME}`
  const userUri = baseUri + userEndpoint

  return request
    .get(userUri)
    .then(response => {
      const groups = response.body.user.groups
      return groups.map(group => group.name)
    })
    .then(groups => ({
      userId: user.id,
      username: user.username,
      groups
    }))
    .catch(err => console.log(err))
}

module.exports = getGroups

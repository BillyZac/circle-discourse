const unirest = require('unirest')
require('dotenv').config()

const baseUri = process.env.DISCOURSE_BASE_URI
const userEndpoint = `/users/zac.json?api_key=${process.env.DISCOURSE_API_KEY}&amp;api_username=${process.env.DISCOURSE_USER_NAME}`
const userUri = baseUri + userEndpoint

unirest('GET', userUri, function(result) {
  const groups = result.body.user.groups
  groups.forEach(group => {
    console.log(group.id, group.name);
  })
})

const unirest = require('unirest')
require('dotenv').config()

const baseUri = 'https://forum.practitionerscircle.org'
const route = `/admin/users/list/active.json?api_key=${process.env.DISCOURSE_API_KEY}&amp;api_username=${process.env.DISCOURSE_USER_NAME}`

unirest('GET', baseUri + route, function(result) {
  console.log(result);
})

const unirest = require('unirest')
const baseUri = 'https://forum.practitionerscircle.org'
const route = '/admin/users/list/active.json?api_key=b1066ffd7fd3a9125fcfba307d8f822d3b075de5d373319757101a963143cf92&amp;api_username=zac'

unirest('GET', baseUri + route, function(result) {
  console.log(result);
})

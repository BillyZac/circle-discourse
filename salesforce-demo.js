var nforce = require('nforce');
require('dotenv').config()

console.log(process.env.SALESFORCE_CLIENT_ID)
console.log(process.env.SALESFORCE_CLIENT_SECRET)
console.log(process.env.SALESFORCE_CALLBACK_URL)
console.log(process.env.SALESFORCE_USERNAME)
console.log(process.env.SALESFORCE_PASSWORD)
console.log(process.env.SALESFORCE_SECURITY_TOKEN)

// // create the connection with the Salesforce connected app
var org = nforce.createConnection({
  clientId: process.env.SALESFORCE_CLIENT_ID,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
  redirectUri: process.env.SALESFORCE_CALLBACK_URL,
  apiVersion: 'v39.0',
  environment: 'sandbox',
  mode: 'single'
});

// authenticate and return OAuth token
org.authenticate({
  username: process.env.SALESFORCE_USERNAME,
  password: process.env.SALESFORCE_PASSWORD,
  securityToken: process.env.SALESFORCE_SECURITY_TOKEN
}, function(err, resp){
  if (!err) {
    console.log('Successfully logged in! Cached Token: ' + org.oauth.access_token);
  }
  if (err) console.log(err);
});

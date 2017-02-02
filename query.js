const low = require('lowdb')
const db = low('db.json')

const zac = db.get('users')
  .find({ username: 'zac'})
  .value()

console.log(zac);

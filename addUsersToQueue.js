// A script that (pretends to) update an action queue (somewhere) with user info pulled from Discourse

const request = require('superagent')
const getUsersAndTheirGroups = require('./getUsersAndTheirGroups')

const addUserToQueue = user => {
  const calculateSanghaLevel = groups => {
    // Map Discourse groups to a single Sangha Level
    return 'Tantrika'
  }
  const sanghaLevel = calculateSanghaLevel(user.groups)
  const payload = {
    discourseUserId: user.userId,
    discourseUsername: user.username,
    sanghaLevel,
  }
  const action = {
    type: 'UPDATE_USER',
    payload,
  }

return request
   .post('http://localhost:8000/queue') // Pretend like this is a job queue out in cyberspace
   .send(action)
   .set('X-API-Key', 'heyyouguys')
   .set('Accept', 'application/json')
}

getUsersAndTheirGroups()
  .then(users => Promise.all(users.map(addUserToQueue)))
  .then(result => {
    console.log(`Successfully added ${result.length} user updates to the queue`);
  })
  .catch(error => {
    console.log('oh no!', error);
  })

// A script that (pretends to) update SalesForce with user info pulled from Discourse

const getUsersAndTheirGroups = require('./getUsersAndTheirGroups')

const updateSFUser = user => {
  console.log(`Pretending to update record for ${user.username}`);
  return new Promise((resolve, reject) => {
    // Send update to SF
    // If successful:
      resolve()
    // If not:
      reject()
  })
}

getUsersAndTheirGroups()
  .then(users => Promise.all(users.map(updateSFUser)))

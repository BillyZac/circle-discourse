var express = require('express')
var app = express()

app.get('/oauth/_callback', (req, res) => {
  console.log(req.body);
  res.end('OK')
})
app.listen(3000)
console.log('listening on 3000');

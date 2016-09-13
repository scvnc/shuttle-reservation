const bodyParser = require('body-parser');
var express = require('express');
// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all routes
/*app.use(bodyParser());*/


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/reservation', function(req, res){
  var name = JSON.stringify(req.body)
  var html = `Hello ${name}!`
  res.send(html);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

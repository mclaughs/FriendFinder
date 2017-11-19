// body-parser to see data in JSON format
var bodyParser = require('body-parser');
// express to simplify routing in node.js
var express = require('express');
// variable app makes it easier to call expresss
var app = express();
// takes PORT set by deployment site or configued here

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, '/client')));
app.get("/", function(req, res){
	res.render('/client/index.html')
})
app.listen(8000, function(){
	console.log('up and running')
})

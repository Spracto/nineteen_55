var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response){
	response.send("<h1> Hello Word </h1>");
});
app.use(express.static(path.join(__dirname, '/client')));

app.listen(app.get('port'),  function(){
	console.log('listening', app.get('port');)
});

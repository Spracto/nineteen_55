var express = require("express");
var app = express();
app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response){
 response.render("/client/index.html");
});
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});

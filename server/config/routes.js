var mongoose = require('mongoose');

var people = require('../controllers/peoples.js')

module.exports = function(app) {
    // app.get('/', function(request, response){
    //     people.show_all(request, response)
    // });
    app.get('/people', function(request, response){
        people.index(request, response)
    });
    app.post('/people', function(request, response){
        console.log('step 3', request.body)
        people.create(request, response)
    })
    app.delete('/people/:id', function(request, response){
        people.delete(request, response)
    })
    app.get('/new/:name', function(request, response){
        people.create(request, response)
    });
    app.get('/:name', function(request, response){
        people.show(request, response)
    });
    app.get('/remove/:name', function(request, response){
        people.destroy(request, response)
    });
}

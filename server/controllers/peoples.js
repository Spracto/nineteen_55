var mongoose = require('mongoose');
var people = mongoose.model('People');

module.exports = {
    index: function(request, response){
        people.find({}, function(err, people){
            if(err){
                console.log("you have errors ", err)
            } else {
                response.json(people)
            }
        });
    },
    create: function(request, response){
        console.log(request.params)
        var person = new people({name: request.body.name})
        person.save(function(err, newbie){
            if(err){
                console.log('something went wrong')
            } else {
                console.log('person created')
                response.json(newbie)
            }
        })
    },
    delete: function(request, response){
        people.remove({_id: request.params.id}, function(err, person){
            response.json({msg: 'success'})
        })
    },
    show: function(request, response){
        people.findOne({name: request.params.name}, function(err, person){
            response.json(person)
        })
    }
}

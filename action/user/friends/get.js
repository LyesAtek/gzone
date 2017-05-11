var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var id = req.params.id;
        user.findOne({
            _id:id
        },function (err,obj) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (obj && obj.friends) {
                    var promises = [];
                    for(var i=0; i<obj.friends.length; i++){
                        var query = user.findOne({_id:obj.friends[i]});
                    promises.push(query);
                    }
                    q.all(promises).then(function(results){
                        console.log(JSON.stringify(results));
                        res.send(results)
                    })

                }
                else
                    res.send({error: 'Friends not found'});
            }
        });

    }
};
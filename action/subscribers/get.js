var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var id = req.params.id;
        user.findOne({
            _id: id
        }, function (err, obj) {
            if (err) {
                console.error(err);
                res.status(500).send({error: "Server error, please try again later"});
            }
            else {
                if (obj && obj.subscribers) {
                    var promises = [];
                    for (var i = 0; i < obj.subscribers.length; i++) {
                        var query = user.findOne({_id: obj.subscribers[i]});
                        promises.push(query);
                    }
                    q.all(promises).then(function (results) {
                        res.status(200).send(results)
                    })

                }
                else {
                    res.status(404).send({error: 'Resource not found'});
                }
            }
        });

    }
};
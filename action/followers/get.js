var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var userId = req.params.id;
        user.findOne({
            _id: userId
        }, function (err, obj) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (obj && obj.followers) {
                    var promises = [];
                    for (var i = 0; i < obj.followers.length; i++) {
                        var query = user.findOne({_id: obj.followers[i]});
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
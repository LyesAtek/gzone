var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var limit = 10;
        var userId = req.params.id;
        var offset = req.query.offset ? req.query.offset * limit : 0;

        user.findOne({
            _id: userId
        }, function (err, obj) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (obj && obj.followers) {
                    var promises = [];
                    var count = 0;
                    for (var i = offset; (i < obj.followers.length) && (count < limit); i++) {
                            var query = user.findOne({_id: obj.followers[i]});
                            promises.push(query);
                            count++;
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
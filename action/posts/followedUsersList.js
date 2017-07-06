var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var post = app.model.post;
        var userId = req.params.userId;
        var limit = 10;
        var offset = req.query.offset ? Number(req.query.offset * limit) : 0;
        user.findById(userId, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (!result) {
                    return res.status(404).send({error: 'Resource not found'});
                }
                post.find({
                    userId: {$in:result.followedUsers}
                }, function (error, result) {
                    if (error) {
                        return res.status(500).send({error: error});
                    }
                    else {
                        if (!result) {
                            return res.status(404).send({error: 'Resource not found'});
                        }
                        else {
                            res.status(200).send(result)
                        }
                    }
                })
                    .limit(limit)
                    .skip(offset);
            }
        })
    }
};
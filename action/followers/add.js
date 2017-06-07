var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;

        if (!req.body.followerId || !req.body.userId) {
            res.status(400).send({error: "Bad request"});
        }
        else {
            var userId = app.mongoose.Types.ObjectId(req.body.userId);
            var followerId = app.mongoose.Types.ObjectId(req.body.followerId);
            user.findOne({_id: userId}, function (err, result) {
                if (err) {
                    console.error(err);
                    res.status(500).send({error: "Server error, please try again later"});
                }
                else if (!result) {
                    res.status(404).send({error: "User not found"});
                }
                else if(result.followers.indexOf(followerId) >= 0){
                    res.status(403).send({error: "User already followed by this follower"});
                }
                else {
                    user.update({_id: userId}, {$push: {followers: followerId}}, function (userUpdateErr) {
                        if (userUpdateErr) {
                            res.status(500).send({error: "Server error, please try again later"});
                        }
                        else {
                            res.status(200).send({});
                        }
                    });
                }
            });
        }
    };
};
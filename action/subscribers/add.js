var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;

        if (!req.body.userId || !req.body.subscriberId) {
            res.status(400).send({error: "Bad request"});
        }
        else {
            var userId = app.mongoose.Types.ObjectId(req.body.userId);
            var subscriberId = app.mongoose.Types.ObjectId(req.body.subscriberId);
            user.findOne({_id: userId}, function (err, result) {
                if (err) {
                    console.error(err);
                    res.status(500).send({error: "Server error, please try again later"});
                }
                else if (!result) {
                    res.status(404).send({error: "User not found"});
                }
                else if(result.subscribers.indexOf(subscriberId) >= 0){
                    res.status(403).send({error: "Subscriber already subscribed to this user"});
                }
                else {
                    user.update({_id: userId}, {$push: {subscribers: subscriberId}}, function (userUpdateErr) {
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
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;

        if (!req.body.userId || !req.body.subscriberId) {
            res.status(400).send({error: "Bad request"});
        }

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
            else if (result.subscribers.indexOf(subscriberId) < 0) {
                res.status(404).send({error: "Subscriber not found for this user."});
            }
            else {
                user.update({_id: userId}, {$pull: {subscribers: subscriberId}}, function (err, result) {
                    if (err) {
                        console.error(err);
                        res.status(500).send({error: "Server error, please try again later"});
                    }
                    else {
                        if (result) {
                            res.status(200).send({});
                        }
                        else
                            res.status(500).send({error: "User update failed"});
                    }
                });
            }
        });
    }
};

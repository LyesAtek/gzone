module.exports = function (app) {
    return function (req, res) {
        var friendRequest = new app.model.friendRequest(
            {
                senderId: app.mongoose.Types.ObjectId(req.body.senderId),
                receiverId: app.mongoose.Types.ObjectId(req.body.receiverId),
                message: req.body.message
            }
        );

        friendRequest.save(function (err, result) {
                if (err) {
                    return res.status(500).send({error: err});
                }
                else {
                    if (result) {
                        res.send({});
                    }
                    else
                        res.send({error: "User update failed"});
                }
            });
    }
};
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
                    if(err.errors && err.errors.receiverId && err.errors.senderId){
                     return res.status(403).send({error: "Friend request already sent"});
                    }
                    return res.status(500).send({error: err});
                }
                else {
                    if (result) {
                        res.status(201).send({_id: result._id});
                    }
                    else
                        res.status(500).send({error: "User update failed"});
                }
            });
    }
};
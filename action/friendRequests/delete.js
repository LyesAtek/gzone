module.exports = function (app) {
    return function (req, res) {
        var friendRequest = app.model.friendRequest;
        var senderId = app.mongoose.Types.ObjectId(req.body.senderId);
        var receiverId = app.mongoose.Types.ObjectId(req.body.receiverId);

        if(!senderId ||!receiverId){
            res.status(500).send({error: err});
        }

        friendRequest.remove({senderId: senderId, receiverId: receiverId}, function (err, result) {
            if (err) {
                res.status(500).send({error: err});
            }
            console.log(result);
            res.send({});
        });
    }
};
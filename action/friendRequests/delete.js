module.exports = function (app) {
    return function (req, res) {
        var friendRequest = app.model.friendRequest;
        var requestId = req.params.requestId;

        friendRequest.remove({_id: requestId}, function (err, result) {
            if (err) {
                res.status(500).send({error: err});
            }
            res.status(200).send({});
        });
    }
};
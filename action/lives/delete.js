module.exports = function (app) {
    return function (req, res) {
        var live = app.model.live;
        var liveId = req.params.liveId;

        live.remove({_id: liveId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
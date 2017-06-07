module.exports = function (app) {
    return function (req, res) {
        var video = app.model.video;
        var videoId = req.params.videoId;

        video.remove({_id: videoId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
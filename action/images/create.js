module.exports = function (app) {
    return function (req, res, next) {
        var image = new app.model.image({
            userId: req.body.userId,
            gameId: req.body.gameId,
            title: req.body.title,
            link: req.body.link,
            likes: req.body.likes,
            pows: req.body.pows,
            comments: req.body.comments,
            datetimeCreated: req.body.datetimeCreated
        });
        image.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({});
                }
                else
                    res.status(500).send({error: "Image post failed"});
            }
        });
    }
};
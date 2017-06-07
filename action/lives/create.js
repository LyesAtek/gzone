module.exports = function (app) {
    return function (req, res, next) {
        var live = new app.model.live({
            userId: req.body.userId,
            gameId: req.body.gameId,
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
            likes: req.body.likes,
            pows: req.body.pows,
            comments: req.body.comments,
            private: req.body.private,
            datetimeCreated: req.body.datetimeCreated
        });
        live.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({});
                }
                else
                    res.status(500).send({error: "Live post failed"});
            }
        });
    }
};
module.exports = function (app) {
    return function (req, res, next) {
        var post = new app.model.post({
            userId: req.body.userId,
            text: req.body.text,
            likes: req.body.likes,
            pows: req.body.pows,
            comments: req.body.comments,
            images: req.body.images,
            videos: req.body.videos,
            datetimeCreated: req.body.datetimeCreated
        });
        post.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({});
                }
                else
                    res.status(500).send({error: "Post creation failed"});
            }
        });
    }
};
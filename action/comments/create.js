module.exports = function (app) {
    return function (req, res, next) {
        var comment = new app.model.comment({
            userId: req.body.userId,
            postId: req.body.postId,
            text: req.body.text,
            likes: req.body.likes,
            pows: req.body.pows,
            comments: req.body.comments,
            images: req.body.images,
            videos: req.body.videos,
            datetimeCreated: req.body.datetimeCreated
        });
        comment.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({});
                }
                else
                    res.status(500).send({error: "Comment creation failed"});
            }
        });
    }
};
module.exports = function (app) {
    return function (req, res, next) {
        var comment = new app.model.comment({
            userId: req.body.userId,
            postId: req.body.postId,
            text: req.body.text,
            video: req.body.video,
            datetimeCreated: req.body.datetimeCreated
        });
        comment.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({_id: result._id});
                }
                else
                    res.status(500).send({error: "Comment creation failed"});
            }
        });
    }
};
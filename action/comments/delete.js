module.exports = function (app) {
    return function (req, res) {
        var comment = app.model.post;
        var commentId = req.params.commentId;

        comment.remove({_id: commentId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
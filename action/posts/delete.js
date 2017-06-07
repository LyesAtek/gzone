module.exports = function (app) {
    return function (req, res) {
        var post = app.model.post;
        var postId = req.params.postId;

        post.remove({_id: postId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
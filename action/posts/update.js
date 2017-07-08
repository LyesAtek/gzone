module.exports = function (app) {
    return function (req, res) {
        var post =  app.model.post;
        var postId = req.params.postId;

        post.update({_id: postId}, req.body, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result!==null) {
                    res.send({});
                }
                else
                    res.send({error: "Post update failed"});
            }
        });

    }
};
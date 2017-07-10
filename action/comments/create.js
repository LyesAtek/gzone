module.exports = function (app) {
    return function (req, res, next) {
        var post = app.model.post
        if(!req.body.postId){
            return res.status(400).json({
                error : "Bad Request"
            })
        }
        var comment = new app.model.comment({
            userId: req.body.userId,
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
                    post.findByIdAndUpdate(req.body.postId, {$push: {comments : result._id}}, {new: true}, function (err,pushResult) {
                        console.log(result._id)
                        if(err){
                            return res.status(500).send({error: err});
                        }
                        else{
                            if (pushResult) {
                                res.status(201).send({_id: result._id});
                            }
                            else
                                res.status(404).send({error: 'User not found'});
                        }
                    });

                }
                else
                    res.status(500).send({error: "Comment creation failed"});
            }
        });
    }
};
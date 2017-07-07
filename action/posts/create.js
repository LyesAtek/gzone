module.exports = function (app) {
    return function (req, res, next) {
        var userModel = app.model.user;
        var post = new app.model.post({
            userId: req.body.userId,
            gameId: req.body.gameId,
            text: req.body.text,
            likes: req.body.likes,
            author: req.body.author,
            comments: req.body.comments,
            image: req.body.image,
            video: req.body.video,
            datetimeCreated: req.body.datetimeCreated,
            mark: req.body.mark,
            flagOpinion: req.body.flagOpinion,
            receiverId: req.body.receiverId
        });

        userModel.findOne({_id: req.body.userId}, function(err, user){
            if(err){
                res.status(500).send({});
            }
            else if(!user || !user._id){
                res.status(404).send({error: "User not found"});
            }
            else{
                post.save(function (err, result) {
                    if (err) {
                        return res.status(500).send({error: err});
                    }
                    else {
                        if (result) {
                            res.status(201).send({_id: result._id});
                        }
                        else
                            res.status(500).send({error: "Post creation failed"});
                    }
                });
            }
        });
    }
};
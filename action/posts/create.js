module.exports = function (app) {
    return function (req, res, next) {
        var userModel = app.model.user;
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

        userModel.findOne({_id: req.body.userId}, function(err, user){
            if(err){
                res.status(500).send({});
            }
            else if(!user._id){
                res.status(404).send({error: "User not found"});
            }
            else{
                post.author = user.firstName + ' ' + user.lastName;
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
        });
    }
};
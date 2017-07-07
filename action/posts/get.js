module.exports = function (app) {
    return function (req, res) {
        var post =  app.model.post;
        var postId = req.params.postId;
        post.findOne({
            _id: postId
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Resource not found'});
            }
        })
            .sort({datetimeCreated : -1});

    }
};
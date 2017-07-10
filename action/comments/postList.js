var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var comment = app.model.comment;
        var post = app.model.post;
        var postId = req.params.postId;
        var limit = 10;
        var offset = req.query.offset ? Number(req.query.offset * limit) : 0;
        post.findOne({
            _id: postId
        }, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    var promises = [];
                    for(var i = 0; i<result.comments.length; i++){
                        promises.push(comment.findOne({
                            _id: result.comments[i]
                        }))
                    }
                    q.all(promises).then(function(result){
                        return res.status(200).send(result)
                    }).catch(function(err){
                        return res.status(500).send(err)
                    });
                }
                else{
                    res.status(404).send({error: 'Resource not found'});
                }
            }
        })
            .limit(limit)
            .skip(offset);

    }
};
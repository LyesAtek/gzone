module.exports = function (app) {
    return function (req, res) {
        var comment =  app.model.comment;
        var commentId = req.params.commentId;
        comment.findOne({
            _id: commentId
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    return res.send(result)
                }
                else{
                    return res.status(404).send({error: 'Resource not found'});
                }
            }
        });
    }
};
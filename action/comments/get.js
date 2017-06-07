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
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Resource not found'});
            }
        });

    }
};
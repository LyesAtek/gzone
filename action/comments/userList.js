var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var comment = app.model.comment;
        var userId = req.params.userId;
        var limit = 10;
        var offset = req.query.offset ? Number(req.query.offset * limit) : 0;
        comment.find({
            userId: userId
        }, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.status(200).send(result)
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
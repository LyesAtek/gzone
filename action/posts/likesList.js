var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var post = app.model.post;
        var limit = 10;
        var offset = req.query.offset ? req.query.offset * limit : 0;
        post.find({}, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    var posts = [];
                    var count = 0;
                    result = result.sort(function (a, b) {
                        return a.likes.length < b.likes.length;
                    });
                    for(var i=offset; (i<result.length) && (count < limit); i++){
                        posts.push(result[i]);
                        count++;
                    }
                    return res.status(200).send(posts)
                }
                else {
                    return res.status(404).send({error: 'Resource not found'});
                }
            }
        });

    }
};
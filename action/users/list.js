module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var limit = 10;
        var offset = req.query.offset ? req.query.offset * limit : 0;
        user.find({}, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Users not found'});
            }
        })
            .limit(limit)
            .skip(offset);
    }
};
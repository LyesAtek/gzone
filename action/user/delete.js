module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        user.remove({_id: req.params.id}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.send({});
            }
        });
    }
};
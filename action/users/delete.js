module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var userId = req.params.userId;

        user.remove({_id: userId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
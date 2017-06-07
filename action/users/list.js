module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var id = req.params.id;
        user.find({
            //options here
        }, function (err, result) {
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
        });

    }
};
module.exports = function (app) {
    return function (req, res, next) {
        var client = new app.model.client({
            name: req.body.name,
            id: req.body.id,
            secret: req.body.secret
        });
        client.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({_id: result._id});
                }
                else
                    res.status(500).send({error: "Opinion post failed"});
            }
        });
    }
};
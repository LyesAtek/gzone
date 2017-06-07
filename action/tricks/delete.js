module.exports = function (app) {
    return function (req, res) {
        var trick = app.model.trick;
        trick.remove({_id: req.params.id}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
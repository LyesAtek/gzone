module.exports = function (app) {
    return function (req, res) {
        var opinion = app.model.opinion;
        var opinionId = req.params.opinionId;
        opinion.remove({_id: opinionId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
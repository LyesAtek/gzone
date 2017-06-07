module.exports = function (app) {
    return function (req, res) {
        var test = app.model.test;
        var testId = req.params.testId;

        test.remove({_id: testId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
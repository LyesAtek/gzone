var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var test = app.model.test;
        var userId = req.params.userId;
        test.find({
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
        });

    }
};
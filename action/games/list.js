var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var game = app.model.game;
        var limit = 10;
        var offset = req.query.offset ? Number(req.query.offset * limit) : 0;
        game.find({}, function (err, result) {
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
        })
            .limit(limit)
            .skip(offset);

    }
};
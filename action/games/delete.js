module.exports = function (app) {
    return function (req, res) {
        var game = app.model.game;
        var gameId = req.params.gameId;

        game.remove({_id: gameId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
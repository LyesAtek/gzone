module.exports = function (app) {
    return function (req, res) {
        var game =  app.model.game;
        var gameId = req.params.gameId;

        game.update({_id: gameId}, req.body, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result!=null) {
                    res.send({});
                }
                else
                    res.send({error: "Game update failed"});
            }
        });

    }
};
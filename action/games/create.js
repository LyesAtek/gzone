module.exports = function (app) {
    return function (req, res, next) {
        var game = new app.model.game({
            name: req.body.name,
            followersId: req.body.followersId,
            platforms: req.body.platforms,
            developer: req.body.developer,
            editor: req.body.editor,
            categories: req.body.categories,
            ratings: req.body.ratings,
            synopsis: req.body.synopsis,
            solo: req.body.solo,
            multiplayer: req.body.multiplayer,
            cooperative: req.body.cooperative,
            website: req.body.website,
            wallpaper: req.body.wallpaper,
            boxart: req.body.boxart,
            datetimeCreated: req.body.datetimeCreated
        });
        game.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({_id: result._id});
                }
                else
                    res.status(500).send({error: "Game creation failed"});
            }
        });
    }
};
module.exports = function (app) {
    return function (req, res, next) {
        var user = new app.model.user({
            reply: req.body.reply,
            score: req.body.score,
            dateOfBirth:req.body.dateOfBirth,
            email:req.body.email,
            username: req.body.username,
            password : req.body.password,
            avatar :req.body.avatar,
            description : req.body.description,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            datetimeRegister: req.body.datetimeRegister,
            followedUsers: req.body.followedUsers,
            followedGames: req.body.followedGames,
            connected: req.body.connected
        });
        user.save(function (err,result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else{
                return res.status(201).send({_id: result._id});
            }
        });
    }
};
module.exports = function (app) {
    return function (req, res, next) {
        var user = new app.model.user({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            dateOfBirth:req.body.dateOfBirth,
            address:req.body.address,
            city:req.body.city,
            country:req.body.country,
            email:req.body.email,
            username: req.body.username,
            password : req.body.password,
            avatar :req.body.avatar,
            description : req.body.description,
            facebook : req.body.facebook,
            twitter : req.body.twitter,
            steam : req.body.steam,
            youtube : req.body.youtube,
            twitch : req.body.twitch,
            website : req.body.website,
            certified: req.body.certified,
            datetimeRegister: req.body.datetimeRegister,
            datetimeLastLogin: req.body.datetimeLastLogin
        });
        user.save(function (err,obj) {
            if (err) {
                return res.status(500).send({error: err});
            }
            res.send({id: obj._id});
        });
    }
};
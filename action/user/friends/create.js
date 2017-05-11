module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var userId = req.params.userId;

        var friendId = app.mongoose.Types.ObjectId(req.body.friendId);

        user.update({_id:userId},{$push: {friends : friendId}}, function (err, obj) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (obj) {
                    res.send({});
                }
                else
                    res.send({error: "User update failed"});
            }
        });

    }
};
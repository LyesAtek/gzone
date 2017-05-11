module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var userId = req.params.id;

        var friendId = app.mongoose.Types.ObjectId(req.body.friendId);

        user.update({_id:userId},{$pull: {friends : friendId}}, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.send({});
                }
                else
                    res.send({error: "User update failed"});
            }
        });
    }
};

module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var userId = req.params.userId;
        var otherId = req.params.otherId;
        user.findByIdAndUpdate(userId, {$pull: {followedUsers : otherId}}, {new: true}, function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.status(200).json(result);
                }
                else
                    res.status(404).send({error: 'User not found'});
            }
        });

    }
};
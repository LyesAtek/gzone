module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;

        if (!req.body.user1Id || !req.body.user2Id) {
            res.status(400).send({error: "Bad request"});
        }

        var user1Id = app.mongoose.Types.ObjectId(req.body.user1Id);
        var user2Id = app.mongoose.Types.ObjectId(req.body.user2Id);

        user.update({_id:user1Id},{$pull: {friends : user2Id}}, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    user.update({_id:user2Id},{$pull: {friends : user1Id}}, function (err, result) {
                        if(err){
                            return res.status(500).send({error: err});
                        }
                        else{
                            if (result) {
                                res.status(200).send({});
                            }
                            else
                                res.status(500).send({error: "User update failed"});
                        }
                    });
                }
                else
                    res.status(500).send({error: "User update failed"});
            }
        });
    }
};

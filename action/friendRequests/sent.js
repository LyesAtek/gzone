module.exports = function (app) {
    return function (req, res) {
        var friendRequest =  app.model.friendRequest;
        var id = req.params.userId;
        friendRequest.find({
            senderId: id
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    for(var i in result){
                        result[i].id = result[i]._id;
                        delete  result[i]._id;
                    }
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Friend requests not found'});
            }
        });

    }
};
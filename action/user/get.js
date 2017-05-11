module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var id = req.params.id;
        user.findOne({
            _id:id
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result!=null) {
                    result.id = result._id;
                    delete result._id;
                    res.send(result)
                }
                else
                    res.send({error: 'User not found'});
            }
        });

    }
};
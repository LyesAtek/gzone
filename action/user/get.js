module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var id = req.params.id;
        user.findOne({
            _id:id
        },function (err,obj) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (obj!=null) {
                    obj.id = obj._id;
                    delete obj._id;
                    res.send(obj)
                }
                else
                    res.send({error: 'User not found'});
            }
        });

    }
};
module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        var userId = req.params.userId;

        user.update({_id: userId}, req.body, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result!=null) {
                    res.send({});
                }
                else
                    res.send({error: "User update failed"});
            }
        });

    }
};
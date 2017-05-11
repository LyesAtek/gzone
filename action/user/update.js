module.exports = function (app) {
    return function (req, res) {
        var user =  app.model.user;
        user.update({_id:req.params.id}, req.body, function (err, result) {
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
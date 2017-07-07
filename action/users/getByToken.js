module.exports = function (app) {
    return function (req, res) {
        var token =  app.model.token;
        var user =  app.model.user;
        var tokenVal = req.params.token;

        token.findOne({
            value: tokenVal
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    user.findOne({
                        _id: result.userId
                    },function (err,result) {
                        if(err){
                            return res.status(500).send({error: err});
                        }
                        else{
                            if (result) {
                                res.send(result)
                            }
                            else
                                res.status(404).send({error: 'User not found'});
                        }
                    });
                }
                else{
                    res.status(404).send({error: 'User not found'});
                }
            }
        });

    }
};
module.exports = function (app) {
    return function (req, res) {
        var live =  app.model.live;
        var liveId = req.params.liveId;
        live.findOne({
            _id: liveId
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Resource not found'});
            }
        });

    }
};
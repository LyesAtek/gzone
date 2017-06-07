module.exports = function (app) {
    return function (req, res) {
        var test =  app.model.test;
        var testId = req.params.testId;
        test.findOne({
            _id: testId
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
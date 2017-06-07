module.exports = function (app) {
    return function (req, res, next) {
        var test = new app.model.test({
            userId: req.body.userId,
            gameId: req.body.gameId,
            title: req.body.title,
            content: req.body.content,
            mark: req.body.mark,
            datetimeTested: req.body.datetimeTested,
            datetimeCreated: req.body.datetimeCreated
        });
        test.save(function (err, result) {
            if (err) {
                if(err.errors && err.errors.userId && err.errors.gameId){
                    return res.status(403).send({error: "This user has already posted a test for this game"});
                }
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({});
                }
                else
                    res.status(500).send({error: "Test post failed"});
            }
        });
    }
};
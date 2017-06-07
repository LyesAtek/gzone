module.exports = function (app) {
    return function (req, res, next) {
        var opinion = new app.model.opinion({
            userId: req.body.userId,
            testId: req.body.testId,
            title: req.body.title,
            content: req.body.content,
            mark: req.body.mark,
            datetimeCreated: req.body.datetimeCreated
        });
        opinion.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({});
                }
                else
                    res.status(500).send({error: "Opinion post failed"});
            }
        });
    }
};
module.exports = function (app) {
    return function (req, res, next) {
        var trick = new app.model.trick({
            userId: req.body.userId,
            title: req.body.title,
            content: req.body.content,
            datetimeCreated: req.body.datetimeCreated
        });
        trick.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({_id: result._id});
                }
                else
                    res.status(500).send({error: "Trick post failed"});
            }
        });
    }
};
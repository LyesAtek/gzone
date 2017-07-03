module.exports = function (app) {
    return function (req, res, next) {
        var category = new app.model.category({
            title: req.body.title,
            image: req.body.image
        });
        category.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({_id: result._id});
                }
                else
                    res.status(500).send({error: "Category creation failed"});
            }
        });
    }
};
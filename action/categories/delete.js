module.exports = function (app) {
    return function (req, res) {
        var category = app.model.category;
        var categoryId = req.params.categoryId;

        category.remove({_id: categoryId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
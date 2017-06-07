module.exports = function (app) {
    return function (req, res) {
        var image = app.model.image;
        var imageId = req.params.imageId;

        image.remove({_id: imageId}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                res.status(200).send({});
            }
        });
    }
};
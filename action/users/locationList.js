module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var minLongitude = req.params.minLongitude;
        var maxLongitude = req.params.maxLongitude;
        var minLatitude = req.params.minLatitude;
        var maxLatitude = req.params.maxLatitude;

        var options = {
            "longitude": { $gte: minLongitude, $lte: maxLongitude},
            "latitude": { $gte: minLatitude, $lte: maxLatitude}
        };

        user.find(options, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Users not found'});
            }
        });

    }
};
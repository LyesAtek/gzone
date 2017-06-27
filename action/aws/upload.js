module.exports = function (app) {
    return function (req, res, next) {
        var directoryName = req.body.directoryName;
        var file = req.body.file;
        var fileName = req.body.fileName;
        var fileType = req.body.fileType;

        var params = {
            Bucket: app.config.aws.bucketName,
            Key: directoryName + '/' + fileName,
            Body: file,
            ContentType: fileType,
            ACL: 'public-read'
        };

        app.config.aws.instance.putObject(params, function (err, data) {
            if (err) {
                console.error(err);
            }
            else {
                var result = {
                    url: 'https://' + params.Bucket + '.s3.amazonaws.com/' + fileName
                };
                res.status(200).json(result);
            }
        });
        console.log(JSON.stringify(params));
    }
};
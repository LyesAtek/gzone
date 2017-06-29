module.exports = function (app) {
    return function (req, res, next) {
        if(!req.body.directoryName || !req.body.file || !req.body.fileName || !req.body.fileType){
            res.status(400).send({error: "Bad request"});
        }
        else {
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
                    res.status(500).send({error: "Server error, please try again later"});
                }
                else {
                    var result = {
                        url: 'https://' + params.Bucket + '.s3.amazonaws.com/' + fileName
                    };
                    res.status(200).json(result);
                }
            });
        }
    }
};
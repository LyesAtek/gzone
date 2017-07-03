module.exports = function (app) {

    app.get('/sign_s3', function (req, res) {
        aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
        var s3 = new aws.S3({signatureVersion: 'v4'});
        var s3_params = {
            Bucket: S3_BUCKET,
            Key: req.query.file_name,
            Expires: 60,
            ContentType: req.query.file_type,
            ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', s3_params, function (err, data) {
            if (err) {
                console.error(err);
            }
            else {
                var return_data = {
                    signed_request: data,
                    url: 'https://' + S3_BUCKET + '.s3.amazonaws.com/' + req.query.file_name
                };
                res.write(JSON.stringify(return_data));
                res.end();
            }
        });
    });


    return function (req, res, next) {
        var image = new app.model.image({
            userId: req.body.userId,
            gameId: req.body.gameId,
            title: req.body.title,
            link: req.body.link,
            likes: req.body.likes,
            pows: req.body.pows,
            comments: req.body.comments,
            datetimeCreated: req.body.datetimeCreated
        });
        image.save(function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                if (result) {
                    res.status(201).send({_id: result._id});
                }
                else
                    res.status(500).send({error: "Image post failed"});
            }
        });
    }
};
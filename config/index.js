var aws = require('aws-sdk');

module.exports = function (app) {
    app.config = {};
    app.config.aws = {
        accessKey: process.env.AWS_ACCESS_KEY_ID || 'AKIAITN5GD5RUGESTEUQ',
        secretKey: process.env.AWSSecretKey || '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',
        bucketName: process.env.S3_BUCKET_NAME || 'g-zone'
    };
    aws.config.update({accessKeyId: app.config.aws.accessKey, secretAccessKey: app.config.aws.secretKey});

    app.config.aws.instance = new aws.S3({signatureVersion: 'v4'});
};

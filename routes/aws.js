var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.post('/upload',
        bodyparser,
        app.actions.aws.upload
    );
    return router;
};

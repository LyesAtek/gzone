var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:id',
        bodyparser,
        app.actions.followers.get
    );
    router.post('/',
        bodyparser,
        app.actions.followers.add
    );
    router.delete('/',
        bodyparser,
        app.actions.followers.delete
    );
    return router;
};

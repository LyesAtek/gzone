var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:id',
        bodyparser,
        app.actions.friends.get
    );
    router.delete('/:id',
        bodyparser,
        app.actions.friends.delete
    );
    return router;
};

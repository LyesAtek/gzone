var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/',
        bodyparser,
        app.actions.categories.list
    );
    router.get('/:categoryId',
        bodyparser,
        app.actions.categories.get
    );
    router.post('',
        bodyparser,
        app.actions.categories.create
    );
    router.put('/:categoryId',
        bodyparser,
        app.actions.categories.update
    );
    router.delete('/:categoryId',
        bodyparser,
        app.actions.categories.delete
    );
    return router;
};

var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/',
        app.oauth.authorise(),
        app.actions.categories.list
    );
    router.get('/:categoryId',
        app.oauth.authorise(),
        app.actions.categories.get
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.categories.create
    );
    router.put('/:categoryId',
        app.oauth.authorise(),
        app.actions.categories.update
    );
    router.delete('/:categoryId',
        app.oauth.authorise(),
        app.actions.categories.delete
    );
    return router;
};

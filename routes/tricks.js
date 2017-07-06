var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:id',
        app.oauth.authorise(),
        app.actions.tricks.get
    );
    router.get('/list/:id',
        app.oauth.authorise(),
        app.actions.tricks.list
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.tricks.create
    );
    router.delete('/:id',
        app.oauth.authorise(),
        app.actions.tricks.delete
    );
    return router;
};

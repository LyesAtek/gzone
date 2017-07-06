var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:id',
        app.oauth.authorise(),
        app.actions.subscribers.get
    );
    router.post('/',
        app.oauth.authorise(),
        app.actions.subscribers.add
    );
    router.delete('/',
        app.oauth.authorise(),
        app.actions.subscribers.delete
    );
    return router;
};

var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:opinionId',
        app.oauth.authorise(),
        app.actions.opinions.get
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.opinions.userList
    );
    router.get('/test/:testId',
        app.oauth.authorise(),
        app.actions.opinions.testList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.opinions.create
    );
    router.delete('/:opinionId',
        app.oauth.authorise(),
        app.actions.opinions.delete
    );
    return router;
};

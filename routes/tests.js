var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:testId',
        app.oauth.authorise(),
        app.actions.tests.get
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.tests.userList
    );
    router.get('/game/:gameId',
        app.oauth.authorise(),
        app.actions.tests.gameList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.tests.create
    );
    router.delete('/:testId',
        app.oauth.authorise(),
        app.actions.tests.delete
    );
    return router;
};

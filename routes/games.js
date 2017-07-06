var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/',
        app.oauth.authorise(),
        app.actions.games.list
    );
    router.get('/:gameId',
        app.oauth.authorise(),
        app.actions.games.get
    );
    router.get('/:gameId/:categoryId',
        app.oauth.authorise(),
        app.actions.games.categoryList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.games.create
    );
    router.put('/:gameId',
        app.oauth.authorise(),
        app.actions.games.update
    );
    router.delete('/:gameId',
        app.oauth.authorise(),
        app.actions.games.delete
    );
    return router;
};

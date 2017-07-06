var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:id',
        app.oauth.authorise(),
        app.actions.friends.get
    );
    router.delete('/:id',
        app.oauth.authorise(),
        app.actions.friends.delete
    );
    return router;
};

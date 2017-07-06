var express = require('express');
var router = express.Router();


module.exports = function (app) {
    router.get('/:id',
        app.oauth.authorise(),
        app.actions.followers.get
    );
    router.post('/',
        app.oauth.authorise(),
        app.actions.followers.add
    );
    router.delete('/',
        app.oauth.authorise(),
        app.actions.followers.delete
    );
    return router;
};

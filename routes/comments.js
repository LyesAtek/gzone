var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:commentId',
        app.oauth.authorise(),
        app.actions.comments.get
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.comments.userList
    );
    router.get('/post/:postId',
        app.oauth.authorise(),
        app.actions.comments.postList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.comments.create
    );
    router.delete('/:commentId',
        app.oauth.authorise(),
        app.actions.comments.delete
    );
    return router;
};

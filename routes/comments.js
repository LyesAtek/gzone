var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:commentId',
        bodyparser,
        app.actions.comments.get
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.comments.userList
    );
    router.get('/post/:postId',
        bodyparser,
        app.actions.comments.postList
    );
    router.post('',
        bodyparser,
        app.actions.comments.create
    );
    router.delete('/:commentId',
        bodyparser,
        app.actions.comments.delete
    );
    return router;
};

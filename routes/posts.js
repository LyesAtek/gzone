var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:postId',
        bodyparser,
        app.actions.posts.get
    );
    router.get('/',
        bodyparser,
        app.actions.posts.list
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.posts.userList
    );
    router.post('',
        bodyparser,
        app.actions.posts.create
    );
    router.delete('/:postId',
        bodyparser,
        app.actions.posts.delete
    );
    return router;
};

var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:id',
        bodyparser,
        app.actions.user.getFriends
    );
    router.post('/:id',
        bodyparser,
        app.actions.user.createFriend
    );
    router.delete('/:id',
        bodyparser,
        app.actions.user.deleteFriend
    );
    return router;
};

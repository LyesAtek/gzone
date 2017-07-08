var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:postId',
        app.oauth.authorise(),
        app.actions.posts.get
    );
    router.get('/',
        app.oauth.authorise(),
        app.actions.posts.list
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.posts.userList
    );
    router.get('/game/:gameId',
        app.oauth.authorise(),
        app.actions.posts.gameList
    );
    router.get('/received/:userId',
        app.oauth.authorise(),
        app.actions.posts.receivedList
    );
    router.get('/followers/:userId',
        app.oauth.authorise(),
        app.actions.posts.followedUsersList
    );
    router.put('/:postId',
        app.oauth.authorise(),
        app.actions.posts.update
    );
    router.get('/likes/top',
        app.oauth.authorise(),
        app.actions.posts.likesList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.posts.create
    );
    router.delete('/:postId',
        app.oauth.authorise(),
        app.actions.posts.delete
    );
    return router;
};

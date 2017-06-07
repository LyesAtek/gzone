var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
  router.post('',
    bodyparser,
      app.actions.friendRequests.create
  );
  router.delete('',
      bodyparser,
      app.actions.friendRequests.delete
  );
  router.put('/accept/:requestId',
      bodyparser,
      app.actions.friendRequests.accept
  );
  router.put('/deny/:requestId',
      bodyparser,
      app.actions.friendRequests.deny
  );
  router.get('/sent/:userId',
      bodyparser,
      app.actions.friendRequests.getSentRequests
  );
  router.get('/received/:userId',
      bodyparser,
      app.actions.friendRequests.getReceivedRequests
  );
  return router;
};
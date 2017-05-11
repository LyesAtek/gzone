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
  router.post('/accept',
      bodyparser,
      app.actions.friendRequests.accept
  );
  return router;
};
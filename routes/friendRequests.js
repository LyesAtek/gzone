var express = require('express');
var router = express.Router();

module.exports = function (app) {
  router.post('',
    app.oauth.authorise(),
      app.actions.friendRequests.create
  );
  router.delete('',
      app.oauth.authorise(),
      app.actions.friendRequests.delete
  );
  router.put('/accept/:requestId',
      app.oauth.authorise(),
      app.actions.friendRequests.accept
  );
  router.put('/deny/:requestId',
      app.oauth.authorise(),
      app.actions.friendRequests.deny
  );
  router.get('/sent/:userId',
      app.oauth.authorise(),
      app.actions.friendRequests.getSentRequests
  );
  router.get('/received/:userId',
      app.oauth.authorise(),
      app.actions.friendRequests.getReceivedRequests
  );
  return router;
};
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
  router.get('/:id',
      bodyparser,
      app.actions.user.get
  );
  router.post('',
    bodyparser,
      app.actions.user.create
  );
  router.post('/login',
      bodyparser,
      app.actions.user.login
  );
  
  router.put('/:id',
      bodyparser,
      app.actions.user.update
  );
  
  router.delete('/:id',
      bodyparser,
      app.actions.user.delete
  );
  return router;
};
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.get('/himg', 'home.creat');
  app.get('/mimg', 'move.creat');
  app.post('/k', 'korean.creat');
  app.get('/e', 'euramerican.creat');
  app.get('/c', 'china.creat');
  app.get('/f', 'fresh.creat');
};

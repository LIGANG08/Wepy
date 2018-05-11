'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.get('/himg', 'home.creat');
  app.get('/mimg', 'move.creat');
  app.get('/k', 'korean.creat');
};

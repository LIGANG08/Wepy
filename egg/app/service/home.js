/**
 *
 * liagng
 */

'use strict';
module.exports = app => {
  class home extends app.Service {
    * img() {
      try {
        yield app.home.insert('home');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
  }
  return home;
};

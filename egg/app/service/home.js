/**
 *
 * liagng
 */

'use strict';
module.exports = app => {
  class home extends app.Service {
    * img() {
      let res;
      try {
        res = yield app.mysql.select('home');
      } catch (y) {
        this.ctx.logger.error(y);
        return false;
      }
      return res;
    }
  }
  return home;
};

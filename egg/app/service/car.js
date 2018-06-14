/**
 *
 * liagng 2018-6-14
 */

'use strict';
module.exports = app => {
  class car extends app.Service {
    * img() {
      let res;
      try {
        res = yield app.mysql.select('car');
      } catch (y) {
        this.ctx.logger.error(y);
        return false;
      }
      return res;
    }
  }
  return car;
};

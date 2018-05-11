/**
 *
 * liagng
 */

'use strict';
module.exports = app => {
  class Korean extends app.Service {
    * img() {
      let res;
      try {
        res = yield app.mysql.select('korean');
      } catch (y) {
        this.ctx.logger.error(y);
        return false;
      }
      return res;
    }
  }
  return Korean;
};

/**
 *
 * liagng 2018-5-13
 */

'use strict';
module.exports = app => {
  class china extends app.Service {
    * img() {
      let res;
      try {
        res = yield app.mysql.select('china');
      } catch (y) {
        this.ctx.logger.error(y);
        return false;
      }
      return res;
    }
  }
  return china;
};

/**
 *
 * liagng 2018-5-13
 */

'use strict';
module.exports = app => {
  class eur extends app.Service {
    * img() {
      let res;
      try {
        res = yield app.mysql.select('eur');
      } catch (y) {
        this.ctx.logger.error(y);
        return false;
      }
      return res;
    }
  }
  return eur;
};

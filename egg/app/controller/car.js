/**
 *
 * ligang 2018-6-14
 */

'use strict';
module.exports = app => {
  class Mysql extends app.Controller {
    * creat() {
      this.ctx.body = yield this.ctx.service.car.img(this.ctx.request.body);
    }
  }
  return Mysql;
};

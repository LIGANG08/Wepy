/**
 *
 * ligang 2018-5-13
 */

'use strict';
module.exports = app => {
  class Mysql extends app.Controller {
    * creat() {
      this.ctx.body = yield this.ctx.service.euramerican.img(this.ctx.request.body);
    }
  }
  return Mysql;
};

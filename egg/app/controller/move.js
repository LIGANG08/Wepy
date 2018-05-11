/**
 *
 * ligang
 */

'use strict';
module.exports = app => {
  class Mysql extends app.Controller {
    * creat() {
      this.ctx.body = yield this.ctx.service.move.img(this.ctx.request.body);
    }
    // * register() {
    //   this.ctx.body = yield this.ctx.service.user.register();
    // }
  }
  return Mysql;
};

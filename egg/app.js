'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();

    const home = yield app.mysql.query(knex.schema.hasTable('home').toString());
    if (home.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('home', function(table) {
        table.increments();
        table.string('Img-url').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'mobile');
      yield ctx.helper.unique(app, 'user', 'wechat');
    }

    const user = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (user.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.integer('mobile').notNullable().defaultTo(0);
        table.string('wechat').notNullable().defaultTo('');
        table.string('type').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'mobile');
      yield ctx.helper.unique(app, 'user', 'wechat');
    }

  });
};


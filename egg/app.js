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
        table.string('Imgurl').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const move = yield app.mysql.query(knex.schema.hasTable('move').toString());
    if (move.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('move', function(table) {
        table.increments();
        table.string('Imgurl').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const korean = yield app.mysql.query(knex.schema.hasTable('korean').toString());
    if (korean.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('korean', function(table) {
        table.increments();
        table.string('Imgurl').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const eur = yield app.mysql.query(knex.schema.hasTable('eur').toString());
    if (eur.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('eur', function(table) {
        table.increments();
        table.string('Imgurl').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const china = yield app.mysql.query(knex.schema.hasTable('china').toString());
    if (china.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('china', function(table) {
        table.increments();
        table.string('Imgurl').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const fresh = yield app.mysql.query(knex.schema.hasTable('fresh').toString());
    if (fresh.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('fresh', function(table) {
        table.increments();
        table.string('Imgurl').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
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


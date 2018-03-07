
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('tagline');
    table.integer('level').unsigned().notNullable();
    table.text('class').notNullable();
    table.text('race').notNullable();
    table.text('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player');
};

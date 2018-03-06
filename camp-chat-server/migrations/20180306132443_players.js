
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
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
  return knex.schema.dropTableIfExists('players');
};

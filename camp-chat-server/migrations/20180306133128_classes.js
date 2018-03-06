
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', (table) => {
    table.increments();
    table.text('class').notNullable();
    table.text('avatar');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('classes');
};

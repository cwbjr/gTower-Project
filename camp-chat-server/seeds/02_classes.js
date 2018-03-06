
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          id: 1,
          class: 'Barbarian',
          avatar: ''
        },
      ]).then(() => {
      return knex.raw('ALTER SEQUENCE coffee_id_seq RESTART WITH #;');
    });
    });
};

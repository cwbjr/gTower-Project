
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {
          id: 1,
          name: 'Ronin',
          tagline: 'Pain is the bugal call to victory!',
          level: 12,
          class: 'Fighter',
          race: 'Human',
          image:
        },
        {
          id: 2,
          name: 'Zyar',
          tagline: 'Sticks and stones?  Wait till my words seizes the day!',
          level: 10,
          class: 'Wizard',
          race: 'High Elf',
          image:
        },
        {
          id: 3,
          name: 'Clunk',
          tagline: 'Nothing more serious than an empty goblet!',
          level: 6,
          class: 'Barbarian',
          race: 'Dwarf',
          image:
        },
      ]).then(() => {
      return knex.raw('ALTER SEQUENCE coffee_id_seq RESTART WITH 4;');
    });
    });
};

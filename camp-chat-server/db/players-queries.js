const connection = require('./connection');

module.exports = {
  getAll() {
    return connection('players');
  },
  getOne(id) {
    return connection('players')
      .where('id', id)
      .first();
  },
  create(product) {
    return connection('players')
      .insert(product, 'id')
      .then(ids => {
        return ids[0];
      });
  },
  update(id, product) {
    return connection('players')
      .where('id', id)
      .update(product);
  },
  delete(id) {
    return connection('players')
      .where('id', id)
      .del();
  }
};

const connect = require('./connection');

module.exports = {
  getAll() {
    return connect('players');
  },
  getOne(id) {
    return connect('players')
      .where('id', id)
      .first();
  },
  create(product) {
    return connect('players')
      .insert(product, 'id')
      .then(ids => {
        return ids[0];
      });
  },
  update(id, product) {
    return connect('players')
      .where('id', id)
      .update(product);
  },
  delete(id) {
    return connect('players')
      .where('id', id)
      .del();
  }
};

const connection = require('./connection');

module.exports = {
  getAll() {
    return connection('classes');
  },
  getOne(id) {
    return connection('classes')
      .where('id', id)
      .first();
  },
  create(product) {
    return connection('classes')
      .insert(product, 'id')
      .then(ids => {
        return ids[0];
      });
  },
  update(id, product) {
    return connection('classes')
      .where('id', id)
      .update(product);
  },
  delete(id) {
    return connection('classes')
      .where('id', id)
      .del();
  }
};

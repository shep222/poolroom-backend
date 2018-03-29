const db = require('./knex');

module.exports = {
    getTable: () => db('table'),
    createTable: (newItem) => db('table').insert(newItem),
    editTable: (id, newItem) => db('table').where('id', id).update(newItem, 'id'),
    getSingleTable: (id) => db('table').where('id', id),
    deleteTable: (id) => db('table').where('id', id).del().returning('id')
}

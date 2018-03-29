exports.up = (knex) => {
    return knex.schema.createTable('table', (table) => {
        table.increments()
        table.integer('rate')
        // table.varchar('start_time')
        // table.varchar('end_time')
    });
}
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('table')
};

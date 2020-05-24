
exports.up = function(knex) {
    return knex.schema
    .createTable('professores', function (table) {
        table.string('nome').notNullable();
       table.int('numero').notNullable();

       table.string('materia').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("professores");};


exports.up = function(knex) {
    return knex.schema
    .createTable('numeros', function (table) {
         table.string('condicao').notNullable();
         table.string('callback').notNullable();
         table.string('numero').notNullable();
         table.string('nome').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("numeros");};
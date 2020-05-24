
exports.up = function(knex) {
    return knex.schema
    .createTable('perguntas', function (table) {
        table.string('nome').notNullable();
       table.string('numero').notNullable();

       table.string('pergunta').notNullable();
       table.string('materia').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("perguntas");};
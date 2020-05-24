
exports.up = function(knex) {
    return knex.schema
    .createTable('alunos', function (table) {
        table.string('nome').notNullable();
       table.int('numero').notNullable();

       table.string('msg').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("alunos");};
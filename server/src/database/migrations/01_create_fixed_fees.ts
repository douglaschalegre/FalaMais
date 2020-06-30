import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('fixed_fees', table => {
        table.increments('id').primary();
        table.string('origin', 3).notNullable();
        table.string('receiver', 3).notNullable();
        table.float('fee_per_minute').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('fixed_fees');
}
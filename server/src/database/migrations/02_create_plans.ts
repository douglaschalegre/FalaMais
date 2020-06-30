import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('plans', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('free_minutes').notNullable();
        table.float('fee').notNullable();
        
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('plans');
}
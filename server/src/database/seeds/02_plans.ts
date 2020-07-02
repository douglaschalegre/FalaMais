import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('plans').insert([
      {name: 'FaleMais 30', free_minutes: 30, fee:0.1},
      {name: 'FaleMais 60', free_minutes: 60, fee:0.1},
      {name: 'FaleMais 120', free_minutes: 120, fee:0.1}
    ]);
};
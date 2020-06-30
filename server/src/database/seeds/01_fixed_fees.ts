import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('fixed_fees').insert([
      {origin: '011', receiver: '016', fee_per_minute:1.90},
      {origin: '016', receiver: '011', fee_per_minute:2.90},
      {origin: '011', receiver: '017', fee_per_minute:1.70},
      {origin: '017', receiver: '011', fee_per_minute:2.70},
      {origin: '011', receiver: '018', fee_per_minute:0.90},
      {origin: '018', receiver: '011', fee_per_minute:1.90},
    ]);
};
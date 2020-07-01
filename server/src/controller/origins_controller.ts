import { Request, Response } from 'express';
import knex from '../database/connection';

class originsController {
    async index(request: Request, response: Response) {
      
      const origins = await knex('fixed_fees')
        .select('fixed_fees.origin');

      let uniqueOrigins: String[] = [];
      origins.map(origin =>{  
        if(uniqueOrigins.includes(origin.origin)) return
        uniqueOrigins.push(origin.origin);
      })
      
      return response.json(uniqueOrigins);
    }
}

export default originsController;
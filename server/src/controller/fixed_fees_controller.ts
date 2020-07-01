import { Request, Response } from 'express';
import knex from '../database/connection';

class fixedFeesController {
    async index(request: Request, response: Response) {
      
      const fixed_fees = await knex('fixed_fees')
        .select('fixed_fees.*');
      return response.json(fixed_fees);
    }
}

export default fixedFeesController;
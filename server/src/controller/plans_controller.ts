import { Request, Response } from 'express';
import knex from '../database/connection';

class plansController {
    async index(request: Request, response: Response) {
      
      const plans = await knex('plans')
        .select('plans.*');
      return response.json(plans);
    }
}

export default plansController;
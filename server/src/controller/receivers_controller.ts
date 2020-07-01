import { Request, Response } from 'express';
import knex from '../database/connection';

class receiversController {
    async index(request: Request, response: Response) {
      
      const receivers = await knex('fixed_fees')
        .select('fixed_fees.receiver');

      let uniqueReceivers: String[] = [];
      receivers.map(receiver =>{  
        if(uniqueReceivers.includes(receiver.receiver)) return
        uniqueReceivers.push(receiver.receiver);
      })
      
      return response.json(uniqueReceivers);
    }
}

export default receiversController;
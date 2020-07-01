import express from 'express';

import FixedFeesController from './controller/fixed_fees_controller';
import PlansController from './controller/plans_controller';
import OriginsController from './controller/origins_controller';
import ReceiversController from './controller/receivers_controller';

const fixedFeesController = new FixedFeesController();
const plansController = new PlansController();
const originsController = new OriginsController();
const receiversController = new ReceiversController();

const routes = express.Router();

routes.get('/fees', fixedFeesController.index);
routes.get('/plans', plansController.index);
routes.get('/origins', originsController.index);
routes.get('/receivers', receiversController.index);

export default routes
import express from 'express';

// Controller Import
import basicController from './controllers/basicController';

const routes = express();

routes.get('/', basicController.get);

export default routes;
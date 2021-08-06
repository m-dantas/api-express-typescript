  
import { Application } from 'express';
import photoRouter from './PhotoRoutes';

export default class Routes {

  constructor(app: Application) {
    // photos reoutes
    app.use('/api/photos', photoRouter);
  }
}
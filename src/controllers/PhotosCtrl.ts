import { Request, Response, NextFunction } from 'express';
import { apiErrorHandler } from '../handlers/errorHandler';
import PhotosRepository from '../repositories/PhotosRepository';



export default class PhotosCtrl {
    constructor() {}
  
    async postPhoto(req: Request, res: Response, next: NextFunction) {
      try {
        const newPhoto = await PhotosRepository.createPhoto(req['value']['body']);
        res.json(newPhoto);
      } catch (error) {
        apiErrorHandler(error, req, res, 'Erro ao enviar a foto!');
        res.json(error);
      }
    }
  }
  



  
import { Router } from 'express';
import PhotosCtrl from '../controllers/PhotosCtrl';
//import { PhotoValidator } from '../validators/photoValidator';

class PhotoRoutes {
    router = Router();
    photosCtrl = new PhotosCtrl();
    //photoValidator = new PhotoValidator();
    constructor() {
      this.intializeRoutes();
    }
    intializeRoutes() {
			this.router.route('/').post(this.photosCtrl.postPhoto);
    }
  }
  
  export default new PhotoRoutes().router;
  


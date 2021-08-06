import { Photo } from '../models/Photo';

class PhotosRepository {
    constructor() {}
    createPhoto(props: any) {
        return Photo.create(props);
    }
}

export default new PhotosRepository();
import { Photo } from '../models/Photo';

class PhotosRepository {
    constructor() { }
    createPhoto(props: any) {
        return Photo.created(props)
    }
}

export default new PhotosRepository();
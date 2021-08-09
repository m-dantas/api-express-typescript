import { Model } from 'sequelize';

export class Photo {
    public id!: number;
    public date!: string;
    public hour!: string;
    public clientId!: number;
    public base64!: string;
    public status!: boolean;
    public statusMsg!: string;

    public static created(obj: object) {
        return new Promise<object>((resolve, reject) => {
            return resolve(obj)
        })
    }
}

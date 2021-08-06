import { Model } from 'sequelize';

export class Photo extends Model {
    public id!: number;
    public date!: string;
    public hour!: string;
    public clientId!: number;
    public base64!: string;
    public status!: boolean;
    public statusMsg!: string;
}
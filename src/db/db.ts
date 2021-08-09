import { Sequelize, Options } from 'sequelize';
const dbUrl: object = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: process.env.DB_TIMESTAMPS
  }
}
const nodeEnv: string = process.env.NODE_ENV || '';

if (!Object.keys(dbUrl)) {
  console.log('Please create .env file, refer .env.sample');
  process.exit(0);
}

/*
let optionsObj: object = { benchmark: true, logging: console.log };

if (nodeEnv && nodeEnv === 'production') {
  optionsObj = { logging: false };
}
const options: Options = optionsObj; 
*/

export const sequelize: Sequelize = new Sequelize(dbUrl);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully..');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

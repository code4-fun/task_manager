import { Sequelize } from 'sequelize-typescript';
import config from './config/config';
import { Task } from './models/task';

const env = process.env.NODE_ENV || 'development';
const dbConfig = (config as any)[env];

const sequelize = new Sequelize(dbConfig);
sequelize.addModels([Task]);

export default sequelize;

import {Sequelize, Model, Optional, DataType, Association} from 'sequelize';
import {config} from '../config/config';
import { User } from './User';
import { Account } from './Account';

export const sequelize = new Sequelize(
    config.development.database!,
    config.development.username!,
    config.development.password!,
    {
        host: config.development.host,
        dialect: 'mysql'
    }
);
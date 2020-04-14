import {Sequelize} from "sequelize-typescript"

export const sequlize = new Sequelize('paytracker', 'postgres', 'password', {
   host: 'localhost',
   dialect: 'postgres',
   models: [__dirname + '/models'] 
});
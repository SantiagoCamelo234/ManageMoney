import { Sequelize } from "sequelize";
import config  from "../../config/config.js";

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword,{
    host: config.dbHost,
    dialect: 'mysql',
});

export const connectDB = async() =>{
  try {
    await sequelize.authenticate();
    console.log("Conexion a la base de datos establecida exitosamente");
  } catch (error) {
    console.error(error);
  }
}
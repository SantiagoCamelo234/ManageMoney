import {config} from 'dotenv';
config();

const configuration = {
  env: process.env.NODE_ENV || "development",
  port: process.env.DB_PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT
};

export default configuration

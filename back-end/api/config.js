/* import {config} from "dotenv" 
config() */ 
import dotenv from 'dotenv';    /* dotenv file ho jasma config bhanni function cha rah tyo function lai hamiley obj ko help ley call gareko ho using dotenvs */
dotenv.config();              /* 'dotenv' is the module name. and we are asiigning to the dotenv variable can be any */

const appConfig  = {
    // jwtSecret: process.env.JWT_SECRET,    // for JSON Web Token secret key
    // dbUser: process.env.DB_USER,          // for database username
    // dbPassword: process.env.DB_PASSWORD,  // for database password
    mongoUri: process.env.MONGO_URI,            // for the database URL/connection string
    // serverUrl: process.env.SERVER_URL,    // for the server base URL
  };
  console.log(appConfig .mongoUri)
  export default appConfig 
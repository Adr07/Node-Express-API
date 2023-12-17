import { createPool } from "mysql2/promise";
import {DB_HOST , BD_USER , DB_PASSWORD , DB_PORT , DB_DB} from "./confg.js";



export const pool =createPool({
    host :'DB_HOST',
    user : 'BD_USER',
    password : 'DB_PASSWORD',
    port : 'DB_PORT',
    database : 'DB_DB'
})
try {
    console.log('db connected');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }




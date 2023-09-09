import { createPool } from 'mysql2';

export const promisePool = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, 
}).promise();
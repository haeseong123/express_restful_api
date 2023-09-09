import dotEnv from 'dotenv';
import express, { Request, Response } from "express";

dotEnv.config();

import { promisePool } from './config/database'

const app = express();
app.use(express.json()) // application/json일때 request 본문을 req.body에 저장
app.use(express.urlencoded({ extended: true })) // x=www=form-urlencoded일때 request 본문을 req.body에 저장

app.get('/', async (req: Request, res: Response) => {
    const result = await promisePool.execute("SELECT * FROM USER;");
    res.json(result);
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on PORT ${process.env.APP_PORT}...`);
});

// dotenv를 먼저하고
// index.ts를 수행했으면 하는데...
import dotEnv from 'dotenv';
import express, { Request, Response } from "express";
import { getPromisePool } from './config/database';

dotEnv.config();

function bootstrap() {
    const app = express();
    const pool = getPromisePool();

    app.use(express.json()) // application/json일때 request 본문을 req.body에 저장
    app.use(express.urlencoded({ extended: true })) // x=www=form-urlencoded일때 request 본문을 req.body에 저장

    app.get('/', async (req: Request, res: Response) => {
        const result = await pool.execute("SELECT * FROM USER;");
        res.json(result);
    });

    app.listen(process.env.APP_PORT, () => {
        console.log(`Server running on PORT ${process.env.APP_PORT}...`);
    })
}
bootstrap();
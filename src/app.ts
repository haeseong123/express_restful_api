import dotEnv from 'dotenv';
import express, { Router } from "express";
import users from './user/userRouter';
import { DIContainer } from './di/diContainer';
import createDependencies from './di/createDependencies';

dotEnv.config();

function bootstrap() {
    const app = express();
    const router = Router();
    const container = new DIContainer(createDependencies())

    app.use(express.json()) // application/json일때 request 본문을 req.body에 저장
    app.use(express.urlencoded({ extended: true })) // x=www=form-urlencoded일때 request 본문을 req.body에 저장

    users(router, container.resolve("userController"));
    app.use('/', router);

    app.listen(process.env.APP_PORT, () => {
        console.log(`Server running on PORT ${process.env.APP_PORT}...`);
    })
}
bootstrap();
// https://www.youtube.com/watch?v=WfCJ3sHnLBM&t=1425s
// 1. User Controller/Service/Repository 작성하기
// 2. DI Container 작성하기
// 3. error handling 어떻게 하는지 고민하고 작성하기
// 4. request body, DB result Convert 하기
// 5. Dynamic Query 작성하기
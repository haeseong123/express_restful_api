import { Router } from "express";
import { UserController } from "./userController";

export default (router: Router, controller: UserController) => {
    router.get('/users', controller.getUsers);
}

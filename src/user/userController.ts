import { Request, Response } from "express";
import { UserService } from "./userService";

export class UserController {
    constructor(private readonly userService: UserService) { }

    getUsers = async (req: Request, res: Response) => {
        const result = await this.userService.findAll();
        return res.status(200).json(result);
    }
}
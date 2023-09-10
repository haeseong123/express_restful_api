import { createPromisePool } from "../config/database";
import { UserController } from "../user/userController";
import { UserRepository } from "../user/userRepository";
import { UserService } from "../user/userService";
import { DependencyNames } from "./dependencyNames";

export default () => {
    const dependencies: Map<DependencyNames, any> = new Map();
    const pool = createPromisePool();
    const userRepository = new UserRepository(pool);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    dependencies.set("pool", pool)
    dependencies.set("userRepository", userRepository)
    dependencies.set("userService", userService)
    dependencies.set("userController", userController)

    return dependencies;
}
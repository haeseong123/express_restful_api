import { UserRepository } from "./userRepository";

export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    findAll = () => {
        return this.userRepository.findAll();
    }
}
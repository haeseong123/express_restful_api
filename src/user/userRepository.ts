import { Pool } from 'mysql2/promise'

export class UserRepository {
    constructor(private readonly pool: Pool) { }

    findAll = () => {
        return this.pool.execute("SELECT * FROM user");
    }
}
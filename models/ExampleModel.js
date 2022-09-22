const db = require('../db/Pool');


module.exports = class ExampleModel {
    async create() {
        
    }

    async update() {

    }

    async findOneByEmail(email) {
        try {
            const statement = `SELECT * FROM example WHERE email = $1`;
            const values = [email];
            const result = await db.query(statement, values);

            if (result.rows?.length) {
                return result.rows[0];
            }

            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findAll() {
        try {
            const statement = "SELECT * FROM example";
            const result = await db.query(statement);

            if (result.rows?.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async deleteOne() {
        
    }
}
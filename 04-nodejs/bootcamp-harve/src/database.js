import mysql from 'mysql2/promise';

class mysqlservice {
    connection; 

    async getConnection() {
        if (!this.connection) {
        this.connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'harve',
            port: 3306,});
        }

        return this.connection;
    }
}
export const mysqlService = new mysqlservice().getConnection();
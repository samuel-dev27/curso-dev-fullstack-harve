import mysql from 'mysql2/promise';
export async function connect() {

    const connection = await mysql.createConnection(
        {
            host: "Localhost",
            user: "root",
            password: "root",
            port: 3306,
            database: "harve"
            
        }
    );
    return connection;
}
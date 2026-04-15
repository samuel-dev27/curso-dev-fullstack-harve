import { mysqlService } from "../database.js";

export class UsuarioRepository {
    async criar (nome, email, senha) {
        const db = await mysqlService;

        const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        const [resultado] = await db.query(sql, [nome, email, senha]);

        return resultado;
    }

    async buscarPorEmail (email) {
        const db = await mysqlService;
        const sql = 'SELECT * FROM usuarios WHERE email = ?';
        const [resultado] = await db.query(sql, [email]);

        return resultado;
    }
}
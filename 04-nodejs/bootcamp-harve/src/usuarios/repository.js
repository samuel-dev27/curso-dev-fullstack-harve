import { mysqlService } from "../database.js";

export class UsuarioRepository {
    async criar (nome, email, senha) {
        const db = await mysqlService;

        const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        const [resultado] = await db.query(sql, [nome, email, senha]);

        return resultado;
    }
}
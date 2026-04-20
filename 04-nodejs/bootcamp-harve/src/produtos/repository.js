import { mysqlService } from "../database.js";
export class produtosRepository {

    async criar(){
        const db = await mysqlService;
        const sql = "INSERT INTO produtos (nome, preco, descricao, categoria_id) VALUES (?, ?)";
        const [resultado] = await db.query(sql, [nome, preco, descricao, categoria_id]);
        return resultado;
    }
    async listar(){
        
            const db = await mysqlService;
            const sql = "SELECT * FROM produtos";
            const [resultado] = await db.query(sql);
            return resultado;
    }
}

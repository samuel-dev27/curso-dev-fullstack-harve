import { mysqlService } from "./../database.js";
export class categoriasRepository {
    async criar(nome, descricao){
        
            const db = await mysqlService;
            const sql = "INSERT INTO categoria_produto (nome, descricao) VALUES (?, ?)";
            const resultado = await db.query(sql, [nome, descricao]);
            return resultado;
        
        
    }
    
    async listar(filtro){
        
            const db = await mysqlService;
            let sql = "SELECT * FROM categoria_produto";

            if (filtro){
                sql += " WHERE nome LIKE ? ";
            }
            const [resultado] = await db.query(sql, [`%${filtro}%`]);
            return resultado;
        }
    }



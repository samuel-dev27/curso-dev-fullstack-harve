import express from 'express';
import { connect } from './database.js';
import { authMiddleware } from './authMiddleware.js';
import yup from 'yup';
import e from 'express';        


async function run() {
    const app = express();
    


    app.get('/', (req, res) => {    //API de teste para verificar se o servidor está funcionando
        res.send('API Harve express');
    });


    app.get("/produtos", async (req, res) => {  //API que filtra pelo valor mínimo e máximo dos produtos, utilizando query params

        const queryParams = req.query;
        console.log(queryParams);

        const db = await connect();
        let sqlProdutos = "SELECT * FROM produtos";

        if (Object.keys(queryParams).length > 0) {
            sqlProdutos += " WHERE ";

            const parametros = [];

            if (queryParams.valorMin) {
                parametros.push(`preco >= ${queryParams.valorMin}`);
            }
            if (queryParams.valorMax) {
                parametros.push(`preco <= ${queryParams.valorMax}`);
            }

            sqlProdutos += parametros.join(" AND ");
        }

        const [produtos] = await db.query(sqlProdutos);

        await db.end();
        res.json(produtos);

    })


    app.get("/produtos/:id", authMiddleware, async (req, res) => {  //API que filtra pelo id do produto, utilizando path params
        const params = req.params;
        const sql = "SELECT * FROM produtos WHERE id = ?";

        const db = await connect();
        const [produto] = await db.query(sql, [params.id]);

        await db.end();

        res.json(produto);


    })

    app.use(express.json()); // Middleware para interpretar o corpo das requisições como JSON


    app.post("/login", async (req, res) => {  //API de login para gerar o token de autenticação

        const loginSchema = yup.object().shape(
            {
                email: yup.string().email().required(),
                senha: yup.string().required()
            }
        )
        
        const validado = await loginSchema.validate(req.body,{
            abortEarly: false,
        })

        const db = await connect();
        const sql = "SELECT * FROM usuarios WHERE email = ?";
        const [usuarios] = await db.query(sql, [validado.email]);

        const sql2 = "SELECT * FROM usuarios";
        const [resultados] = await db.query(sql2);
        //console.log(resultados);

        if (!usuarios.length || usuarios[0].senha !== validado.senha) {
            res.status(401).json({ error: "Credenciais inválidas" });
         } else {
                res.status(200).json({ error: "Login bem-sucedido" });
            }
    })


    

    app.listen(3333, () => {
        console.log('Servidor executando em Porta 3333 http://Localhost:3333');
    });

}

run();
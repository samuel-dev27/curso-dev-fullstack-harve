import express from "express";
import { connect } from "./practica_database.js";
import { autenticadoMiddleware } from "./practica_authMiddleware.js";
import yup from "yup";

async function run() {
    const app = express();
    
    app.get("/", (req, res) => {
        res.send("Api endpoint de practica de express");}
     );

     app.get("/mercancias", async (req, res) => {
        const queryParams = req.query;
        console.log(queryParams);

        const db = await connect();
        let sqlMercancias = "SELECT * FROM produtos";

        if (Object.keys(queryParams).length > 0) {
            sqlMercancias += " WHERE ";
            
            const parametros = [];

            if (queryParams.valorMin) {
                parametros.push(`preco >= ${queryParams.valorMin}`);
            }
            if (queryParams.valorMax) {
                parametros.push(`preco <= ${queryParams.valorMax}`);
            }
            sqlMercancias += parametros.join(" AND "); 
        }

        const [mercancias] = await db.query(sqlMercancias);
        
        await db.end();
        res.json(mercancias);
     });

        app.get("/mercancias/:id", autenticadoMiddleware, async (req, res) => {
            const params = req.params;
            const sql = "SELECT * FROM produtos WHERE id = ?";

            const db = await connect();
            const [mercancia] = await db.query(sql, [params.id]);
            await db.end();
            res.json(mercancia);
        });

        app.use(express.json()); //middleware para poder interpretar o corpo da requisição como JSON o usar endpoint con cuerpo y uso del POST

        app.post("/login", async (req, res) => {
            const logindatos = yup.object().shape({
                email: yup.string().email().required(),
                senha: yup.string().required()
            });

            const loginValidado = await logindatos.validate(req.body, {
                abortEarly: false,
            });

            const db = await connect();
            const sql = "SELECT * FROM usuarios WHERE email = ?";
            const [usuario] = await db.query(sql, [loginValidado.email]);

                if (!usuario.length || usuario[0].senha !== loginValidado.senha) {
                    res.status(401).json({ error: "Credenciais inválidas" });
                } else {
                    res.status(200).json({ error: "Login exitoso" });
                }
            });
                  

    app.listen(3333, () => {
        console.log("Servidor activo http://localhost:3333");
    });
}

run();

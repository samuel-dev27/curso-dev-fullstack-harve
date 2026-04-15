import express from 'express';
import { UsuariosController } from './usuarios/controller.js';

async function run() {
    const app = express();
    app.use(express.json());

    app.post('/usuarios', async (req, res) => {
        const controller = new UsuariosController();
        await controller.criar(req, res);

    });

    app.post('/login', async (req, res) => { 
        const controller = new UsuariosController();
        
        await controller.login(req, res);
    }
   
    )

    app.listen(3333, () => console.log('servidor  iniciado em http://localhost:3333'));

}

run();
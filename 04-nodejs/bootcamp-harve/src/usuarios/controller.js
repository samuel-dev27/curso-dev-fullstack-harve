import { UsuarioService } from "./service.js";

export class UsuariosController {
     constructor () {
   this.service = new UsuarioService()
     }

    async criar (req, res) {
        const resultado = await this.service.criar(
            req.body.nome,
            req.body.email,
            req.body.senha,
        );

        const httpStatus = resultado.ok ? 201 : 400;
        res.status(httpStatus).json(resultado);
    }
}
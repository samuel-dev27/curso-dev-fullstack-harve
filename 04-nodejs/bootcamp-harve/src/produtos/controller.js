import { produtoServices } from "./services.js";

export class produtosController {
    constructor(){
        this.services = new produtoServices();
    }
    async listar (req, res){
        const resultado = await this.services.listar(req.query);
        const httpStatus = resultado.ok ? 200 : 400;
        res.status(httpStatus).json(resultado);
    }
}
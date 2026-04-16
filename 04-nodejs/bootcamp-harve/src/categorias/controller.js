import { categoriaServices } from "./services.js";

export class categoriasController {
    constructor(){
        this.services = new categoriaServices();
    }

    async criar(req, res){
      //  const {nome, descricao} = req.body;
        const resultado = await this.services.criar(
            req.body.nome,
            req.body.descricao,
        );

        const httpStatus = resultado.ok ? 201 : 400;
        res.status(httpStatus).json(resultado);
    }
    async listar(req, res){
        const resultado = await this.services.listar(req.query.nome);

        const httpStatus = resultado.ok ? 200 : 404;
        res.status(httpStatus).json(resultado);
    }




}
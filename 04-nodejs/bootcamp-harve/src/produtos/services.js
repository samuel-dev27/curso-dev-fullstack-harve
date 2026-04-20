import yup from "yup";
import { produtosRepository } from "./repository.js";

export class produtoServices {
    constructor(){
        this.repository = new produtosRepository();
    }

    async criar (){
        try{
            const resultado = await this.repository.criar();
            return{
                ok: true,
                resultado: resultado,
            };
        }catch(error){
            return{
                ok: false,
                error: error.message,
            }
        }
    }
    async listar (){

        try{
            const resultado = await this.repository.listar();
            if (!resultado.length){
                return{
                    ok: false,
                    mensagem: "nenhum produto encontrado",
                };
            }
            return{
                    ok: true,
                    resultado: resultado,
            };
        }catch(error){
            return{
                ok: false,
                error: error.message,
            }
        }
    }
}
import yup from "yup";
import { categoriasRepository } from "./repository.js";


export class categoriaServices {
    constructor(){
        this.repository = new categoriasRepository();
    }

    async criar (nome, descricao){
        try{
            const criarCategoriaSchema = yup.object().shape({
            nome: yup.string().required().min(3),
            descricao: yup.string().required(),
            
            });
            await criarCategoriaSchema.validate({
                nome: nome,
                 descricao: descricao,
                },{
                    abortEarly: false,
                });
                const resultado = await this.repository.criar(nome, descricao);
                return {
                    ok: true,
                    mensagem: "Categoria criada com sucesso",
                    resultado: resultado,
                }

        } catch(error){
            
            return{
            ok: false,
            erro: error.message
            }
        }
    }

    async listar(filtro){
        try{
            const resultado = await this.repository.listar(filtro);
            
            if (!resultado.length){
                return{
                    ok: false,
                    mensagem: "nenhuma categoria encontrada",
                };
            }
            return{
                    ok: true,
                    resultado: resultado,
            };
        }catch(error){
            return{
                ok: false,
                error: error.mensagem,
            }
        }
    }


}
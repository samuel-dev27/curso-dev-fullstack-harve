import yup from 'yup';
import { UsuarioRepository } from './repository.js';
export class UsuarioService {

    constructor() {
        this.repository = new UsuarioRepository();
    }

    async criar (nome, email, senha) {
        const criarUsuarioSchema = yup.object().shape({
            nome: yup.string().required(),
            email: yup.string().email().required(),
            senha: yup.string().min(6).required()

        });

        try {
            await criarUsuarioSchema.validate({
                 nome: nome,
                 email: email,
                 senha: senha,
                }, {
                    abortEarly: false 

                });

                const resultado = await this.repository.criar(nome, email, senha);

              return {
                ok: true,
                mensagem: 'Usuário criado com sucesso',
                resultado: resultado,
                };
        } catch (error) {
            return { 
                ok: false,
                erro: error.message
            };
        }
    }
}
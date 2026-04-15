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

               // if (!email)

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

    async login (email, senha) {
        const loginSchema = yup.object().shape({
            email: yup.string().required().email(),
            senha: yup.string().required().min(6),

        })
        try {
            await loginSchema.validate({
                email: email,
                senha: senha,
            },{
                abortEarly: false,
            
            });

            const usuario = await this.repository.buscarPorEmail(email, senha);

            if (!usuario[0] || usuario[0].senha !== senha){
                return {
                    ok: false,
                erro: 'credenciais inválidas'
            }
        }
            
            return {
                ok: true,
                mensagem: "usuário logado com sucesso",
                resultado: {
                    nome: usuario[0].nome,
                    email: usuario[0].email,
                }
            };

        } catch (error) {
            return {
                ok: false,
                erro: error.message,
            };
        }

    }
}
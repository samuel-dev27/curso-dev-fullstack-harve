/*
Em um sistema de cadastro de usuários. 
Para que um usuário seja considerado "habilitado" a acessar uma plataforma, 
ele precisa atender a algumas condições.
Contexto:
O usuário precisa ser maior de idade (idade >= 18).
O usuário precisa ter uma conta verificada (contaVerificada).
O usuário precisa fornecer um código de segurança correto (codigoDeSeguranca).
*  O usuário deve ser maior de idade e ter a conta verificada para ser habilitado.
* O usuário deve ser maior de idade ou ter a conta verificada para ser habilitado.
* O usuário não pode estar bloqueado. Vamos verificar isso com o operador !


Informe nome do usuario a cadastrar
Informe sua idade
Informe situação da conta (Verificada ou Não verificada)
Informe situação do cadastro (Bloqueada ? Sim ou Não)


Se não está bloqueado, deve ser maior de 18 anos e ter conta
verificada -> console.log(`Acesso permitido`)

*/

let nome = prompt("Informe o nome do usuário a cadastrar: ")
// let idade = prompt("Informe sua idade: ")
// let contaVerificada = prompt("Informe situação da conta (Verificada ou Não verificada): ")
let bloqueada = prompt("Informe situação do cadastro (Bloqueada ? Sim ou Não): ")

if (bloqueada === "sim") {
    console.log("Acesso negado")
} else {
    let idade = prompt("Informe sua idade: ")

    if (idade < 18) {
        console.log("Menor de Idade. Não pode entrar.")
    } else { 
        let contaVerificada = prompt("Informe situação da conta (Verificada ou Não verificada): ")

        if (contaVerificada.toLowerCase === "nao" || contaVerificada.toLowerCase === "não") {
            console.log("Não verificado.")
        } else if (contaVerificada === "verificada") {
            console.log("Bem-vindo " + nome)
        }

    }
}

//------------------------------------------------
//condiçao ternária 

/*
let nome = prompt(`Informe nome do usuario a cadastrar`)
let idade = prompt(`Informe sua idade`)
let situacaoConta = prompt(`Informe situação da conta (Verificada ou Não verificada)`)
let situacaoCadastro = prompt(`Informe situação do cadastro (Bloqueado ? Sim ou Não)`)

if (situacaoCadastro.toLowerCase() == `sim`) {
    console.log(`${nome}, acesso negado!`)
} else {
    if (idade >= 18 && situacaoConta.toLowerCase() == `verificada`) {
        console.log(`${nome}, acesso permitido!`)
    } else {
        console.log(`${nome}, acesso negado!`)
    }
}

// condiçao ternária ->

situacaoCadastro.toLowerCase() == `sim`
 ? console.log(`acesso negado`)
 : idade >= 18 && situacaoConta.toLowerCase() == `verificada` 
    ? console.log(`${nome}, acesso permitido!`) : console.log(`acesso negado!`)

*/

//transformar um  prompt em um número -> let variavel = Number(prompt("Digite um número: "))

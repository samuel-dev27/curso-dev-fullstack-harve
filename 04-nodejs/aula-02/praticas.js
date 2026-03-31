class Usuario { 
    id;
    nome;
    email;
    senha; 

    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

const novoUsuario = new Usuario(
    Date.now(),
    "Samuel",
    "Samuel@example.com",
    "12345678")

console.log(novoUsuario)
console.log(novoUsuario.nome);
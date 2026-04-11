import mysql from 'mysql2/promise';

async function start() { 
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'harve'
        })

        const selectUsuarios = 'SELECT * FROM usuarios';
        const [resultado] = await db.query(selectUsuarios);

        console.log(resultado);
        

        const selectCategorias = 'SELECT * FROM categoria_produto';
        const [resultadoCategorias] = await db.query(selectCategorias);

        console.log(resultadoCategorias);

        const selectProdutos = 'SELECT * FROM produtos';
        const [resultadoProdutos] = await db.query(selectProdutos);

        console.log(resultadoProdutos);

        // const insertUsuario = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
       
        // const usuario = {
        //     nome: 'Samuel Teste', 
        //     email: 'Samuel@example.com',
        //     senha: '12345678'}
       
        // /* const valuesUsuarios = [
        //     [usuarioTeste.nome, usuarioTeste.email, usuarioTeste.senha]
        // ]
        //     */

        // const [resultadoInsert] = await db.query(insertUsuario, [
        //     usuario.nome,
        //      usuario.email, 
        //      usuario.senha
        //     ])

        // console.log(resultadoInsert);

        // const insertProduto = 'INSERT INTO produtos (id_categoria, nome, preco, descricao) VALUES (1, ?, ?, ?)';

        // const produto = {
        //     nome: 'Smartphone XYZ (2026)',
        //     preco: 5999.99,
        //     descricao: 'O novo Smartphone XYZ (2026) é a última inovação em tecnologia móvel, oferecendo desempenho excepcional, câmeras avançadas e uma experiência de usuário incomparável.'
        // }
        // const [resultadoInsertProduto] = await db.query(insertProduto, [
        //     produto.nome,
        //     produto.preco,
        //     produto.descricao
        // ])
        // console.log(resultadoInsertProduto);

        /* process.exit(1); pode encerrar o processo aqui, mas é melhor fazer
         isso depois de encerrar a conexão com o banco de dados, para garantir
          que todos os recursos sejam liberados corretamente.*/
        await db.end();     // Encerra a conexão com o banco de dados
        //process.exit(1); // Encerra o processo com código de erro 1
    } catch (error) {
        console.log(error.message);
    
        process.exit(1); // Encerra o processo com código de erro 1
    /*
        finaliza a execuçao do script, para não 
        ficar consumindo recursos do sistema, como memória e CPU, no nosso servidor.
     */
    }
}

start();
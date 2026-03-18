console.log("exercicio 1")


let carrinho = [`camiseta`, `calça`, `sapato`]

let acao = prompt(`Remover ou Adicionar ?`)

let produto = prompt(`Informe um produto: ${carrinho}`)

if (acao.toLowerCase() == `adicionar`) {
    carrinho.push(produto.toLowerCase())
} else if (acao.toLowerCase() == `remover`) {
    debugger
    let carrinhoAtt = carrinho.filter(a => {
        debugger
        let resultado = a != produto.toLowerCase()
        debugger
        return resultado
    })
    carrinho = carrinhoAtt


} else {
    alert(`Ação ${acao} não encontrada`)
}

alert(`Carrinho: ${carrinho}`)








/*

let carrinho = ["calça", "camisa", "sapato"]
let acao = prompt(" Carrinho: /n Remover ou Adicionar item?")
let produto = prompt("Informe o produto: ")



//let acao = Number(prompt(" Digite a ação que deseja realizar: \n1 - Adicionar item \n2 - Remover item \n3 - Listar itens"))

//let produto = Number(prompt(" Digite o produto que deseja Adicionar: \n1 - Calça \n2 - Camisa \n3 - Sapato"))


if (acao.toLowerCase() === "adicionar") {
    carrinho.push(produto.toLowerCase())
    console.log("Produto adicionado com sucesso!")

}
else if (acao.toLowerCase() === "remover") {
    carrinho = carrinho.filter(item => item !== produto.toLowerCase())
    console.log("Produto removido com sucesso!")
    alert("Produto removido com sucesso!")
    alert("Carrinho atualizado: " + carrinho)
}
else  
*/



let carrinho = [`camiseta`, `calça`, `sapato`]

let acao = prompt(`Remover ou Adicionar ?`)

let produto = prompt(`Informe um produto: ${carrinho}`)

const adicionarAoCarrinho = () => {
    carrinho.push(produto.toLowerCase())
}

const deletarDoCarrinho = () => {
    let carrinhoAtt = carrinho.filter(a => {
        let resultado = a != produto.toLowerCase()
        return resultado
    })
    carrinho = carrinhoAtt
}

if (acao.toLowerCase() == `adicionar`) {
    adicionarAoCarrinho()
} else if (acao.toLowerCase() == `remover`) {
    deletarDoCarrinho()
} else {
    alert(`Ação ${acao} não encontrada`)
}

alert(`Carrinho: ${carrinho}`)
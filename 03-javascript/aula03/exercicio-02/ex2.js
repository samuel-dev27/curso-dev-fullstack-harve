let cardapio = ["bacon", "peperoni", "calabresa", "marguerita"]

let sabor = prompt("Digite o sabor da pizza que deseja: ")
console.log(cardapio)

if (cardapio.includes(sabor.toLowerCase())) {

    alert("Pizza disponível")
}
else {

    alert("Pizza indisponível")
    console.log(`cliente pidiu sabor: ${sabor}`)
    cardapio.push(sabor)
    console.log(`cardápio: `, cardapio)
}



//abajo ejemplo de la clase, pero no es necesario para el ejercicio


debugger
console.log("Exercício 6")

let ano = prompt("Informe o ano: ")
let anoNum = Number(ano)

//ou pode ser nesta expressão:
//let anoNum = Number(prompt("Informe o ano: "))


if ((anoNum % 4 === 0 && anoNum % 100 !== 0) || (anoNum % 400 === 0)) {

    console.log("O ano é bissexto.")
    alert(`o ano ${anoNum} é bissexto!`)
} else {

    console.log(`O ano ${anoNum} não é bissexto.`)
    alert(`o ano ${anoNum} não é bissexto!`)
}


// e nessa expressão:

/*

let anoInformado = prompt(`Informe um ano: `)
let anoInformadoNum = Number(anoInformado)

let eBissexto = anoInformadoNum % 4 === 0 && anoInformadoNum % 100 !== 0 || anoInformadoNum % 400 === 0

if (eBissexto) {
    alert(`${anoInformadoNum} é bissexto`)
} else {
    alert(`${anoInformadoNum} não é bissexto`)
}

*/
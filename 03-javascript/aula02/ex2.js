/*
 No formulário de nome e idade, exiba a classificação em um alert conforme a idade digitada:
0-12 Criança
13-21 Adolescente
22-60 Adulto
> 61 Terceira idade
*/




/*
if (idade < 13) {
    console.log("criança")
} else if (idade <= 21) {
    console.log("adolescente")
} else if (idade <= 60) {
    console.log("adulto")
}
else {
    console.log("terceira idade")
}*/
debugger
let idade = prompt("Digite a idade: ")

if (idade == undefined || idade >= 0 ) {
    console.log("Invalido")
}
 else if (idade >= 0 && idade <= 12) {
    console.log("criança")
} else if (idade > 12 && idade <= 21) {
    console.log("adolescente")
} else if (idade > 21 && idade <= 60) {
    console.log("adulto")
}
else {
    console.log("terceira idade")
}

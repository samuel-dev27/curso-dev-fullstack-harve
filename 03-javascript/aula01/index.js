//let peimeiraVariavel = "ola, mundo!";
//alert (peimeiraVariavel);

/* texto grande 
quebrado de varias linhas */
//console.log(peimeiraVariavel);


// concatenaçao
//texto para imprimir
//ola, [nome]!
//bem vinda(o) ao curso de [curso].
// vamos aprender muito juntos!

//let nome = 'Samuel'
//let curso = 'Desenvolvimento web full stack'

//console.log('ola, ' + nome + '!\n' + 'bem vinda(o) ao curso de ' + curso + '.\n' + 'vamos aprender muito juntos!');

//console.log(`Olá, ${nome}.!`);
//console.log(`Bem vindo ao curso de ${curso}.`);
//console.log(`vamos aprender muito juntos!`);

// VAR
//var mensagem = "Olá com var!"
//console.log("1. mensagem (var):", mensagem)

//var mensagem = "Var pode ser redeclarada!"
//console.log("2. mensagem (var):", mensagem)

//mensagem = "Var também pode ser reatribuída!"
//console.log("3. mensagem (var):", mensagem)
// LET
//let saudacao = "Olá com let!";
//console.log("1. saudacao (let):", saudacao);
// saudacao = "Tentando redeclarar let"; // Isso gera erro! Tente descomentar pra ver

//saudacao = "Let pode ser reatribuída!";
//console.log("2. saudacao (let):", saudacao);

// CONST
//const aviso = "Const não pode mudar!";
//console.log("1. aviso (const):", aviso);
// aviso = "Tentando mudar a const"; // Isso gera erro! Tente descomentar pra ver
// const aviso = "Tentando redeclarar a const"; // Isso também gera erro

let letraA = document.getElementById("letra-a").innerHTML
let letraB = document.getElementById("letra-b").innerHTML
let letraC = document.getElementById("letra-c").innerHTML

let valorA = "10"
let valorB = "20"
let valorC = "Null"

document.getElementById("letra-a").innerHTML = `${letraA} ${valorA}`
document.getElementById("letra-b").innerHTML = `${letraB} ${valorB}`
document.getElementById("letra-c").innerHTML = `${letraC} ${valorC}`

//------------------------------------------------- a segunda metade DO EXERCÍCIO tem 2 jeitos de fazer.
// a primeira que tem 6 variaveis e a segunda que tem 1 variável auxiliar.
/*
let letraA2 = document.getElementById("letra-a-2").innerHTML
let letraB2 = document.getElementById("letra-b-2").innerHTML
let letraC2 = document.getElementById("letra-c-2").innerHTML

let valorA2 = "Null"
let valorB2 = "20"
let valorC2 = "10"

document.getElementById("letra-a-2").innerHTML = `${letraA2} ${valorA2}`
document.getElementById("letra-b-2").innerHTML = `${letraB2} ${valorB2}`
document.getElementById("letra-c-2").innerHTML = `${letraC2} ${valorC2}`
*/

// a segunda


let letraA2 = document.getElementById("letra-a-2").innerHTML
let letraB2 = document.getElementById("letra-b-2").innerHTML
let letraC2 = document.getElementById("letra-c-2").innerHTML

let aux = valorA
valorA = valorC
valorC = aux

document.getElementById("letra-a-2").innerHTML = `${letraA2} ${valorA}`
document.getElementById("letra-b-2").innerHTML = `${letraB2} ${valorB}`
document.getElementById("letra-c-2").innerHTML = `${letraC2} ${valorC}`

/* 
Precisa exibir no HTML

letra a: 10
letra b: 20 
letra c: null
-------------------
letra a: null
letra b: 20
letra c: 10 

*/
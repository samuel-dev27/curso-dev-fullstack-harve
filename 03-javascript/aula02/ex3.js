/*
Com os conhecimentos dos tópico anteriores, incremente o Sistema de notas com a informação do número de faltas 
de um aluno. O professor deverá informar o número de faltas do aluno e, se o número for superior a 10 faltas, o aluno 
deve aparecer como reprovado, independente de ter média suficiente para aprovação ou não
*/

let nota = prompt("Digite a nota: ")
let faltas = prompt("Digite o número de faltas: ")

if (nota >= 7 && faltas <= 10) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
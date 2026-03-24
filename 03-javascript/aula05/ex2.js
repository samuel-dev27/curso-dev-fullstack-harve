let numerosAleatorios = [2, 3, 4, 5, 6, 7]
let resultado = 0

for (let num of numerosAleatorios) {
    resultado = num + resultado
}
console.log(`O resultado da soma é ${resultado}`)
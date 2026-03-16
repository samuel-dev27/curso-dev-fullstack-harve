console.log("Exercício 5")


//let valorRadar = number(prompt("Informe a velocidade registrada: "))
let valorRadar = prompt("Informe a velocidade registrada: ")
let valorRadarNum = Number(valorRadar)
const limiteVelocidade = 50
const multiplicadorMulta = 6

if (valorRadarNum > limiteVelocidade) {
    let valorMulta = (valorRadarNum - limiteVelocidade) * multiplicadorMulta
    console.log(`Você foi multado! O valor da multa é R$${valorMulta}`)

    alert(`MULTADO! Vc estava a ${valorRadar}Km/h e o limite neste trecho é ${limiteVelocidade} Km/h;
Você deve pagar uma multa no valor de R$${valorMulta} pelo limite excedido.`)

} else {
    console.log("Velocidade dentro do limite.")

    alert(`Velocidade dentro do limite. Você estava a ${valorRadar}Km/h e o limite neste trecho é ${limiteVelocidade} Km/h.`)
    alert(`Dentro do limite. Tenha uma boa viagem!`)
}
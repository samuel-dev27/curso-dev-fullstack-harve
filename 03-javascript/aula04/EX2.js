/*
Retorne uma mensagem como "Hoje é [DIA DA SEMANA], dia [DIA DO MÊS] de [MÊS] de [ANO]."
Use as funções getDay() e getFullYear() para construir a mensagem.
Use arrays para transformar os números em nomes de dias e meses.Crie uma função chamada mensagemDeHoje que:
Retorne uma mensagem como "Hoje é [DIA DA SEMANA], dia [DIA DO MÊS] de [MÊS] de [ANO]."
Use as funções getDay() e getFullYear() para construir a mensagem.
*/

const diasDaSemana = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado"
];

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
];

const formatarMsgData = () => {
  let dataAtual = new Date()
  let diaDaSemana = dataAtual.getDay()
  let diaDaSemanaPorExtenso = diasDaSemana[diaDaSemana]

  let diaDoMes = dataAtual.getDate()

  let mes = dataAtual.getMonth()
  let mesPorExtenso = meses[mes]

  let ano = dataAtual.getFullYear()

  return `Hoje é ${diaDaSemanaPorExtenso}, dia ${diaDoMes} de ${mesPorExtenso} de ${ano}.`
}

let frase = formatarMsgData()
console.log(frase)
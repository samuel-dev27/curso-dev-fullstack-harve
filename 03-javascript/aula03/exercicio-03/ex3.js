/* (exercicio 03)
 Crie uma aplicação para efetuar o cálculo do índice de massa corporal.
Considere os seguintes critérios:
1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.
3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
4) Após as estradas de dados, atente-se a conversão das informações para dados do tipo number.
5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão:
 m = peso (quilos) ÷ altura² -> formula JS peso / (altura * altura).

7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas utilizando
 os critérios abaixo:
a) Se m estiver abaixo de 16 : Baixo peso muito grave
b) Se m estiver entre 16 e 16,99: Baixo peso grave
c) Se m estiver entre 17 e 18,49: Baixo peso
d) Se m estiver entre 18,50 e 24,99: Peso normal
e) Se m estiver entre 25 e 29,99: Sobrepeso
f) Se m estiver entre 30 e 34,99: Obesidade grau I
g) Se m estiver entre 35 e 39,99: Obesidade grau II
h) Se m for maior que 40: Obesidade grau III
8) Ao término o sistema deve fornecer a seguinte mensagem para o usuário:
“nome” possui índice de massa corporal igual a “m”, sendo classificado como: “classificação”. 
*/
console.log("Exercício 03")

let nome = prompt("Digite o nome da pessoa: ")
let altura = prompt("Digite a altura da pessoa em centímetros: ")
let peso = prompt("Digite o peso da pessoa em kg: ")

let alturaNum = Number(altura)
let pesoNum = Number(peso)

let alturaMetros = (alturaNum / 100) 
let masa = ((pesoNum) / (alturaMetros * alturaMetros) )

//eu quero agregar a formula de peso ideal pra saber quanto deveria ter se tenho sobre peso. kkkkkk pois eu tenho um pouco e gostaria saber em kg quando deveria ter.
let pesoNormalMax = 24.99
let pesoIdeal = ((alturaMetros * alturaMetros) * pesoNormalMax)

console.log(`PESO: `,masa, "ALTURA: ", alturaMetros )
console.log(`PESO:`,pesoNum, `ALTURA: `,alturaNum)

 if (masa < 16 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Baixo peso muito grave, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)

 }
 else if (masa.toFixed(2) >= 16 && masa <= 16.99 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Baixo peso grave, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)

 }
 else if (masa.toFixed(2) >= 17 && masa <= 18.49 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Baixo peso, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)
 } 
 else if (masa.toFixed(2) >= 18.50 && masa <= 24.99 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Peso normal.`)
 }
  else if (masa.toFixed(2) >= 25 && masa <= 29.99 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Sobrepeso, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)
 }
 else if (masa.toFixed(2) >= 30 && masa <= 34.99 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Obesidade grau I, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)
 }
 else if (masa.toFixed(2) >= 35 && masa <= 39.99 ) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Obesidade grau II, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)
 }
  else if (masa.toFixed(2) >= 40) {

    alert(`${nome} possui ${pesoNum}Kg índice de massa corporal igual a ${masa.toFixed(2)}, sendo classificado como: Obesidade grau III, e seu peso ideal seria de ${pesoIdeal.toFixed(2)} kg.`)
 }

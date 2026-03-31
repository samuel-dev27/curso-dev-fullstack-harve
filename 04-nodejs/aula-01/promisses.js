function somaAsync(a, b) {
    return new Promise((resolve, reject) => {
        const resultado = a+b;

        setTimeout(() => {
            if (resultado === 10) {
                reject(new Error('Operaçao invalida'))
            } else {
                resolve(resultado)
            }
        }, 2000)
    })
  }

  somaAsync(2, 3).then(
    (resultado) =>  console.log("resultado 0: ",resultado)
  ).catch((error) => console.log("error 0: ", error.message))

    somaAsync(5, 5).then(
        (resultado) => console.log("resultado: ",resultado)
    ).catch((error) => console.log("error: ", error.message));

    function somaAsync(a, b) {
  return new Promise((resolve, reject) => {
    const resultado = a + b;

    setTimeout(() => {
      if (resultado === 10) {
        reject(new Error("Operação inválida"));
      } else {
        resolve(resultado);
      }
    }, 2000);
  });
}

somaAsync(5, 5)
  .then((resultado) => console.log("Resultado p2: ", resultado))
  .catch((erro) => console.log("Erro p2: ", erro.message));

somaAsync(3, 5)
  .then((resultado) => console.log("Resultado p1: ", resultado))
  .catch((erro) => console.log("Erro p1: ", erro.message));




async function calcular() {
  try {
    const resultado01 = await somaAsync(2, 4);
    console.log("Resultado 01: ", resultado01);
    const resultado02 = await somaAsync(4, 6);// aqui e a raiz do erro rsultado === 10 => reject 
    console.log("Resultado 02: ", resultado02)
    const resultado03 = await somaAsync(3, 5);
    console.log("Resultado 03: ", resultado03) // aqui ocorre o erro e nao da resultado 03
  } catch (erro) {
    console.log("Erro: ", erro.message);
  }
}

calcular();

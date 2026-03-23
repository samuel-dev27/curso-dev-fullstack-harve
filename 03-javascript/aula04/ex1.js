let frase = "eu gosto de JAVA"
//console.log(frase)

const formatarFrase = (texto) => {
    return texto.toLowerCase().replace(`java`,`JavaScript`)

    //return texto.toLowerCase() --- metodo mais hardcode
}

//frase = formatarFrase(frase)-- => metodo mais hardcode
//frase = frase.replace(`java`,`JavaScript`) -- metodo mais hardcode

//console.log(frase)
alert(formatarFrase(frase))
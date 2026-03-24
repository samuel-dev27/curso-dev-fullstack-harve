// const formatarHtml = () => {
//    document.getElementById("cabecalho").innerHTML = "Olá, visitante!"
//}

// formatarHtml()

// segunda parte do exercício evoluido


const formatarHtml = () => {
    document.getElementById(`cabecalho`).innerText = `Olá, visitante`
    let lis = document.getElementsByTagName(`li`)

    for (let li of lis) {
        li.innerText = `${li.innerText} ✅` 
    }

    document.getElementById(`nome`).value = `samuel`
    document.getElementById(`idade`).value = `28`
}

formatarHtml()

const atualizarDados = (event) => {
    event.preventDefault()
    console.log(document.getElementById(`nome`).value)
    console.log(document.getElementById(`idade`).value)
}

document
.getElementById(`atualizar`).addEventListener(`click`, atualizarDados)

function assincrona(callback) {
    callback()
    setInterval(() => {
        console.log('EProcessando...') 
        },1000)
    }


assincrona(() => {
    return setTimeout(() => console.log('callback'), 2000)
})
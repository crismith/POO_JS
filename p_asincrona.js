console.log('callback')
    var cuadrado = (valor, callback ) =>{
        setTimeout( () =>{
            callback(valor, valor * 2)
        }, 1000)
    }

    cuadrado(0, (valor, resultado) =>{
        console.log(`Callback: ${valor}, ${resultado}`)
         cuadrado(1, (valor, resultado) =>{
            console.log(`Callback: ${valor}, ${resultado}`)
        })
    })
console.log('Fin callback')
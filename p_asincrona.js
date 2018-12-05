console.log('callback')
/*
    var cuadrado = (valor, callback ) =>{
        setTimeout( () =>{
            callback(valor, valor * 2)
        }, 500)
    }

    cuadrado(0, (valor, resultado) =>{
        console.log(`Callback: ${valor}, ${resultado}`)
        cuadrado(1, (valor, resultado) =>{
            console.log(`Callback: ${valor}, ${resultado}`)
            cuadrado(2, (valor, resultado) =>{
                console.log(`Callback: ${valor}, ${resultado}`)
                cuadrado(3, (valor, resultado) =>{
                    console.log(`Callback: ${valor}, ${resultado}`)
                })
            })
        })
    })
*/
console.log('Fin callback')

console.log('Promesas en JS')

/*
var cuadrado = valor => {
    return new Promise ((resolve, reject) =>{
        setTimeout( () =>{
            resolve({valor: valor, resultado: valor * valor })
        }, 500)
    })
}

var cuadradoDouble = valor => {
    return new Promise ((resolve, reject) =>{
        setTimeout( () =>{
            resolve({valor: valor, resultado: valor * 10 })
        }, 500)
    })
}

cuadrado(0)
.then( res =>{
    console.log('Inicio Promise')
    console.log(`Promise: ${res.valor}, ${res.resultado}`)
    cuadradoDouble(0)
    .then( obj  =>{
        console.log(`Promise Double: ${obj.valor}, ${obj.resultado}`)
    })
    return cuadrado(1)
})
.then( res =>{
    console.log(`Promise: ${res.valor}, ${res.resultado}`)
    cuadradoDouble(1)
    .then( obj  =>{
        console.log(`Promise Double: ${obj.valor}, ${obj.resultado}`)
    })
    return cuadrado(2)
})
.then( res =>{
    console.log(`Promise: ${res.valor}, ${res.resultado}`)
    cuadradoDouble(2)
    .then( obj  =>{
        console.log(`Promise Double: ${obj.valor}, ${obj.resultado}`)
    })
    return cuadrado(3)
})
.then( res =>{
    console.log(`Promise: ${res.valor}, ${res.resultado}`)
    cuadradoDouble(3)
    .then( obj  =>{
        console.log(`Promise Double: ${obj.valor}, ${obj.resultado}`)
    })
    return cuadrado(4)
})
.then( res =>{
    console.log(`Promise: ${res.valor}, ${res.resultado}`)
    cuadradoDouble(4)
    .then( obj  =>{
        console.log(`Promise Double: ${obj.valor}, ${obj.resultado}`)
    })
    console.log('Fin Promise')
})
*/

console.log('Fin de las Promesas en JS')

console.log('Generators')
/*
const cuadrado = valor => {
    setTimeout(() => {
        console.log( { valor: valor, result: valor * valor } )
    }, 1000 )

    return {
        valor: valor,
        result: valor * valor
    }
}

function* generedor () {
    console.log('Inicio Generator')
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    console.log('Fin Generator')
}

let gen = generedor()
console.log( gen.next().valor )
console.log( gen.next().valor )
console.log( gen.next().valor )
console.log( gen.next().valor )
console.log( gen.next().valor )
*/

console.log('Fin de Generators')


console.log('Async - Await Functions')
const cuadrado = value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ value: value, result: value * value })
        }, 1000 )
    })
}

async function asyncAwait () {
    let obj = await cuadrado(0)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(1)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(2)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(3)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(4)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)
}
asyncAwait()
console.log('Fin Async - Await Functions')


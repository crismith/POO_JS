class Humano {
    constructor (nombre, edad , profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    programar(){
        console.log(`${this.nombre} programa de dia y de noche`)
    }

    comer(comida = 'Tallarines'){
        console.log(`${this.nombre} esta comiendo ${comida}`)
    }
}

var cristhian = new Humano('Cristhian',24, 'Developer')
console.log('cristhian',cristhian)
cristhian.programar()
cristhian.comer()
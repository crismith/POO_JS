con(' objeto con Clase')

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
cristhian.comer('Arroz con pollo')


        class Car {
            constructor (color, marca,modelo,motor) {
                this.color = color;
                this.marca = marca;
                this.modelo = modelo;
                this.motor = motor;
            }

            encender() {
                con(` Enciende el  carro ${this.marca} `)
            }

            velocidad() {
                con(`el carro corre a 100 kilometros porque su modelo es ${this.modelo} `)
            }
        }
        let carro2 = new Car('azul','Mercedez','MER-01','10000PH')
        let carro3 = new Car('rojo','hyundai','elantra','5000PH')

            con(carro2)
                carro2.encender()
                carro2.velocidad()

            con(carro3)
                carro3.encender()
                carro3.velocidad()

    con(' Fin objeto con Clase')
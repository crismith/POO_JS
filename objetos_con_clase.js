
((con , doc) => {

	con('objeto literal')

		const laptop = {
			marca : 'Hp',
			velocidad : 'lenta',
			estado : 'vieja',
			caliente: true,
			encender () {
				con('esta iniciando el SO')
			},
			apagar (bateria = 0, proceso = 'lento'){
				con(`la bateria esta a ${bateria} y se ha parado en proceso de ${proceso} y la velocidad esta ${this.velocidad}`)
			},
			moderna: false,
			fotoLaptop (foto){
				doc.write(` <img src="${foto}">`)
			}
		}

		con(laptop) 
		laptop.encender()
		laptop.apagar(4, 'my lento')
		laptop.fotoLaptop('foto.jpg')

	con(' Fin del objeto literal')




	con(' objeto Prototype')

		let laptop2 = new Object()
		laptop2.marca = 'Mac'
		laptop2.velocidad = 'Rapido'
		laptop2.estado = 'Nueva'
		laptop2.caliente = false
		laptop2.rendimiento = () => { con(`El rendimiento ha mejorado`) }
		// laptop2.encender = () => { con(`la ${this.marca} esta iniciando su SO `) } ESto esta mal
		// laptop2.encender = () => { con(`la ${laptop2.marca} esta iniciando su SO `) } opcion 1
		laptop2.encender =  function () { con(`la ${ this.marca } esta iniciando su SO `) }

		con(laptop2)
		laptop2.rendimiento()
		laptop2.encender()

	con(' Fin del objeto Prototype')



	con(' objeto con funcion Constructora')

		function Carro(color, marca,modelo,motor) {
			this.color = color;
			this.marca = marca;
			this.modelo = modelo;
			this.motor = motor;

			this.encender = () => { con('el carro esta encendiendo')}
			this.velocidad = () => { con(`el carro corre a 100 kilometros porque su marca es ${this.marca} `)}
		}

		let carro1 = new Carro('negro','toyota','yaris','1000PH')
		con(carro1)
		carro1.encender()
		carro1.velocidad()

	con(' Fin objeto con funcion Constructora')



	con(' objeto con Clase')

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

})(console.log, document);
	
// ((c) => {

// 	c('llamar a this implicitamente')

// 	let yo = {
// 		nombre : 'Cristhian',
// 		edad: 23,
// 		correr: function () {
// 			// body...
// 			console.log(`${this.nombre} hoy salimos a correr`)
// 		}
// 	}

// 	c(yo)
// 	yo.correr()

// 	// caso 2
// 	let newCarrera = function (obj) {
// 		c('segundo caso ')

// 		obj.correr =  function (){
// 			c(`este sera otro tipo de carrera ${this.nombre}`)
// 		}
// 	}

// 	let cristian = {
// 		nombre : 'cristian',
// 		edad: 23,
// 	}

// 	newCarrera(cristian)
// 	cristian.correr()

// 	// caso 3

// 	let Esposa = function (nombre, edad, hijo){
// 		return {
// 			nombre: nombre,
// 			edad : edad,
// 			baila: function () {
// 				c(`Ha ${this.nombre} le encanta el baile `)
// 			},
// 			hijo: {
// 				nombre: hijo,
// 				llorar: function() {
// 					c(`pero su hijo ${this.nombre} es un lloron `)
// 				}
// 			}
// 		}
// 	}

// 	let rihana = Esposa('Rihana',33,'Luisito')
// 	c(rihana)
// 	rihana.baila()
// 	rihana.hijo.llorar()

// })(console.log);

((c) => {

	c('llamar a this Explicita')
	let misHijos = function (h1,h2,h3,h4) {
		console.log(`${this.nombre}  tiene tres hijos y ellos son ${h1}, ${h2}, ${h3},${h4} `)
	}
	let papa = {
		nombre: "Arturo",
		edad: 30
	}

	let hijos = ['luis','miguel','jon','erick']



	misHijos.call(papa, hijos[0], hijos[1], hijos[2],hijos[3])
	misHijos.apply(papa, hijos)

})(console.log);
	
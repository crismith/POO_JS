
// Con esto podemos tambien es conocido como abstraccion
let humano = (() => {
	let nombre = 'Cristhian'

	function llamar() {
		return console.log(`te estoy llamando ${nombre}`)
	}

	function correr() {
		return console.log(`hoy iremos a correr con ${nombre}`)
	}

	return {
		llamar : llamar,
		correr : correr
	}
})();

humano.llamar()
humano.correr()
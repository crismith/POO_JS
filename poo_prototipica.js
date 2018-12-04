((c) => {

	let myFamily = {
		abuelos: {
			abuelita: {
				nombre: 'Dora',
				edad: 68,
				hijos: [
					{ 	nombre : 'Hugo',
						edad : 39,
						hijos: [
							{nombre : 'Karen',edad: 20 },
							{nombre : 'Gina',edad: 24 }
						] 
					},
					{
						nombre : 'Rosario',
						edad : 49,
						hijos: [
							{nombre : 'Erick',edad: 18 },
							{nombre : 'Cristhian',edad: 24 }
						] 
					}
				]
			}
		}
	}
	c(myFamily.abuelos.abuelita.nombre) //iteracion del punto
	c(myFamily['abuelos']['abuelita']['nombre']) //iteracion del array
	c(myFamily.abuelos['abuelita'].nombre) //iteracion del mixta
	c(myFamily.abuelos['abuelita'].hijos[0]) //iteracion del mixta a un punto expesifico
	c(myFamily.abuelos['abuelita'].hijos[1])
})(console.log);
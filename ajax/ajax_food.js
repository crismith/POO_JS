((con, doc, ajax) => {
	var state_complete = 4,
	OK = 200,
	NOT_FOUND = 404,
	preload = doc.querySelector('#preload'),
	food = doc.querySelector('#food'),
	menu_comida = doc.querySelector('.menu_comida')

	function loadFood () {
		con('ajax',ajax)
		preload.innerHTML = '<i class="fa  fa-refresh  fa-spin  fa-5x"></i>'
		if ( ajax.readyState === 4 && ajax.status === OK ) {
			preload.innerHTML = ''
			food.innerHTML = ajax.response
		} else if ( ajax.status === NOT_FOUND ) {
			preload.innerHTML = ''
			food.innerHTML = `<b>Esto no preparamos en Perú. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
		}
	}

	function loadDataAjax (e) {
		e.preventDefault()
		if (e.target.localName == 'a') {
			ajax.open('GET', e.target.href, true)
			ajax.addEventListener('readystatechange', loadFood)
			ajax.setRequestHeader('content-type', 'text/html')
			ajax.send()
		};
	}

	menu_comida.addEventListener('click', loadDataAjax)
})(console.log, document, new XMLHttpRequest());
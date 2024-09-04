import { proyects } from './proyects.js';
let contentProyects = document.querySelector('#content-proyects');
let $template = document.querySelector('#template-card-proyect');

const newProyect = noProyect => {
	let cloneTemplate = $template.content.cloneNode(true);
	let $cardProyect = cloneTemplate.querySelector('.card-proyect');
	let $cardProyectImg = $cardProyect.querySelector('img');
	let $infoProyectTitle = $cardProyect.querySelector('.info-proyect > h2');
	let $infoProyectDescription = $cardProyect.querySelector('.info-proyect > p');
	let $infoProyectList = $cardProyect.querySelector('.info-proyect > ul');

	// Imagen
	$cardProyectImg.src = `${proyects.proyectsTotals[noProyect].img}`;
	// Titulo
	$infoProyectTitle.textContent = `${proyects.proyectsTotals[noProyect].title}`;
	// Descripción
	$infoProyectDescription.textContent = `${proyects.proyectsTotals[noProyect].description}`;
	// Crear elementos li de la lista de tecnologías
	proyects.proyectsTotals[`${noProyect}`].list.forEach(item => {
		let $li = document.createElement('li');
		$li.textContent = item;
		$infoProyectList.appendChild($li);
	});

	contentProyects.appendChild(cloneTemplate);
};

export { newProyect };
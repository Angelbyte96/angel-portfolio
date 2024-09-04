import { proyects } from './proyects.js';
let contentProyects = document.querySelector('#content-proyects');
let $template = document.querySelector('#template-card-proyect');

let cloneTemplate = $template.content.cloneNode(true);
let $cardProyect = cloneTemplate.querySelector('.card-proyect');

let $cardProyectImg = $cardProyect.querySelector('img');
let $cardProyectInfo = $cardProyect.querySelector('.info-proyect');
let $infoProyectTitle = $cardProyect.querySelector('.info-proyect > h2');
let $infoProyectDescription = $cardProyect.querySelector('.info-proyect > p');
let $infoProyectList = $cardProyect.querySelector('.info-proyect > ul');

$cardProyectImg.src = proyects.proyectsTotals[0].img;
$infoProyectTitle.textContent = proyects.proyectsTotals[0].title;
$infoProyectDescription.textContent = proyects.proyectsTotals[0].description;
// Crear elementos li de la lista de tecnologías
proyects.proyectsTotals[0].list.forEach(item => {
	let $li = document.createElement('li');
	$li.textContent = item;
	$infoProyectList.appendChild($li);
});

contentProyects.appendChild(cloneTemplate);

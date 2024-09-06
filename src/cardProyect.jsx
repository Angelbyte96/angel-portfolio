import React from 'react';
import { proyects } from './proyects.js';

const CardProyect = () => {
	return proyects.proyectsTotals.map((proyect) => {
		return (
			<div className='card-proyect' key={proyect.id}>
				<img src={proyect.img} alt={proyect.title} />
				<div className='info-proyect'>
					<h2>{proyect.title}</h2>
					<p>{proyect.description}</p>
					<ul className='list-proyect'>
						{proyect.list.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	});
};

export { CardProyect };

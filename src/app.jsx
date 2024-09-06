import React from 'react';

// Componente que solo se encarga de renderizar la lista de elementos
const ListComponent = ({ items }) => {
	return (
		<>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</>
	);
};

// Componente principal de navegación que envuelve el elemento ul
const NavBar = () => {
	const navItems = ['Proyectos', 'Sobre Mi', 'Tecnologías'];

	return (
		<>
			<ListComponent items={navItems} />
		</>
	);
};

export { NavBar };

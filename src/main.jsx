import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavBar } from './app.jsx';
import { CardProyect } from './cardProyect.jsx';

createRoot(document.getElementById('listNav')).render(
	<StrictMode>
		<NavBar />
	</StrictMode>
);

createRoot(document.getElementById('content-proyects')).render(
	<StrictMode>
		<CardProyect />
	</StrictMode>
);

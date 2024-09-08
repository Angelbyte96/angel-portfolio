import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavBar } from './components/navBar.jsx';
import { CardProyect } from './components/cardProyect.jsx';
import { AboutMe } from './components/aboutMe.jsx';

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

createRoot(document.getElementById('section-aboutMe')).render(
	<StrictMode>
		<AboutMe />
	</StrictMode>
);

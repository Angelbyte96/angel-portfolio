import { CardProyects } from '@components/CardProyects.jsx'

const Proyects = () => {
	return (
		<section className='w-[90vw] md:w-[50vw] my-2 md:my-4 mx-auto text-white'>
			<h1 className='mb-2 md:mb-4 text-3xl md:text-4xl'>Proyectos</h1>
			<p className='text-sm md:text-lg mb-4'>
				Te invito a explorar mis proyectos más creativos y desafiantes. Cada uno
				representa mi compromiso con el desarrollo web y mi pasión por transformar
				ideas en soluciones digitales efectivas. Estoy emocionado de compartir
				contigo el resultado de mi trabajo. ¡Inspírate y sumérgete en mis proyectos
				de software!
			</p>
			<main className='grid grid-cols-1 md:grid-cols-2 grid-rows-[auto]'>
				<CardProyects />
			</main>
		</section>
	)
}

export { Proyects }

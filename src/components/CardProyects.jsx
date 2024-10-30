const CardProyects = () => {
	const style = {
		li: 'bg-element-list rounded-sm p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center'
	}
	return (
		<div className='flex flex-col w-full  bg-[#150828] p-1 rounded-2xl gap-2  '>
			<img
				className='rounded-3xl aspect-[1380/920]'
				src='/comingSoon.webp'
				alt='Imagen de proyecto'
			/>
			<h2 className='text-xl md:text-2xl text-[#2cc9ff]'>Proyecto</h2>
			<p className='text-sm md:text-base text-wrap'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
				facilis.
			</p>
			<ul className='flex gap-2 flex-wrap'>
				<li className={style.li}>HTML</li>
				<li className={style.li}>CSS</li>
				<li className={style.li}>JavaScript</li>
			</ul>
		</div>
	)
}

export { CardProyects }

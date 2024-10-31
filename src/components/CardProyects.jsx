const CardProyects = ({ title, img, body, tags, slug }) => {
	const style = {
		li: 'bg-element-list rounded-sm p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center'
	}
	return (
		<div className='flex flex-col w-full  bg-[#150828] p-1 rounded-2xl gap-2 bg-opacity-50 backdrop-blur-3xl'>
			<a href={`/proyect/${slug}`} className="mb-2 xl:mb-0 transition hover:scale-105">
				<img
					className='rounded-3xl aspect-[1380/920]'
					src={img}
					alt={title}
				/>
			</a>
			<h2 className='text-xl md:text-2xl text-[#2cc9ff]'>{title}</h2>
			<p className='text-sm md:text-base text-wrap'>{body}</p>
			<ul className='flex gap-2 flex-wrap'>
				{tags.map((tag, index) => (
					<li key={index} className={style.li}>
						{tag}
					</li>
				))}
			</ul>
		</div>
	)
}

export { CardProyects }

export const stylesTags = {
	li: 'bg-element-list rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center',
	html:
		'bg-linear-to-r from-[#E34F26] via-[#FF6D00] to-[#FF4500] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#E34F26]/40',
	css: 'bg-linear-to-r from-[#1572B6] via-[#1E90FF] to-[#00BFFF] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-cyan-400/40',
	js: 'bg-linear-to-r from-[#F0DB4F] via-[#FFD700] to-[#FFB300] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-[#112A46] justify-center items-center shadow-md shadow-[#F0DB4F]/40',
	react:
		'bg-linear-to-r from-[#61DAFB] via-[#3AAFC9] to-[#007ACC] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#61DAFB]/40',
	node:
		'bg-linear-to-r from-[#68A063] via-[#4E8E4D] to-[#3C6E47] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#68A063]/40',
	typescript:
		'bg-linear-to-r from-[#007ACC] via-[#005A9E] to-[#003B73] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#007ACC]/40',
	nextjs:
		'bg-linear-to-r from-[#333333] via-[#000000] to-[#1A1A1A] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#333333]/40',
	express:
		'bg-linear-to-r from-[#444444] via-[#555555] to-[#666666] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#444444]/40',
	tailwind:
		'bg-linear-to-r from-[#38B2AC] via-[#319795] to-[#2C7A7B] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#38B2AC]/40',
	strapi:
		'bg-linear-to-r from-[#5851DB] via-[#6554C0] to-[#7E5ACB] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#5851DB]/40',
	astro:
		'bg-linear-to-r from-[#2A0656] via-[#6128A1] to-[#8A3ACF] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-white justify-center items-center shadow-md shadow-[#2A0656]/40',
	turso:
		'bg-linear-to-r from-[#4FF8D2] via-[#2FDFB6] to-[#0BA986] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-[#0A2B2D] justify-center items-center shadow-md shadow-[#4FF8D2]/40',
	clerk:
		'bg-linear-to-r from-[#FFFFFF] via-[#F0F0F0] to-[#E0E0E0] rounded-md p-[0.2rem] text-[0.65rem] md:text-sm text-[#000000] justify-center items-center shadow-md shadow-[#FFFFFF]/40'
}

export type TagKey = keyof typeof stylesTags

export function isTagKey(tag: string): tag is TagKey {
	return tag in stylesTags
}

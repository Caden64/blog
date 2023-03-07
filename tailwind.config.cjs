/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'pastel-general': {
					'light-pink': '#FFADAD',
					'deep-champagne': '#FFD6A5',
					'lemon-yellow-crayola': '#FDFFB6',
					'tea-green': '#CAFFBF',
					'electric-blue': '#9BF6FF',
					'baby-blue-eyes': '#A0C4FF',
					'Maximum-blue-purple': '#BDB2FF',
					'Mauve': '#FFC6FF',
					'dark-baby-blue-eyes': '#4a8cdb',
					'border-baby-blue-eyes': '#8fc4ff',
				},
				'pastel-theme': {
					'text-gray': '#27282a',
					'gray': '#495159',
					'teal': '#67CAC6',
					'light-pink': '#D68589',
					'off-white': '#F8F1DF',
					'sweet-blue': '#4C8ED5',
					'med-sweet-blue': '#6a9dd4',
					'light-sweet-blue': '#ACCDEC',
					'dark-sweet-blue': '#2668A6',
				}
			}
		}
	}
}

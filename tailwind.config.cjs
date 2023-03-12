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
					'header-blue': '#82beff',
					'phone-header-blue': '#a3ceff'
				},
				'pastel-theme': {
					'text-gray': '#27282a',
					'gray': '#495159',
					'teal': '#67CAC6',
					'light-pink': '#D68589',
					'off-white': '#F8F1DF',
					'subtitle-off-white':'#F7EDE2',
					'sweet-blue': '#4C8ED5',
					'med-sweet-blue': '#6a9dd4',
					'light-sweet-blue': '#ACCDEC',
					'dark-sweet-blue': '#2668A6',
				},
				'pastel-gradient': {
					 'light-pink': {
						'50': '#fffbfb',
						'100': '#fff7f7',
						'200': '#ffebeb',
						'300': '#ffdede',
						'400': '#ffc6c6',
						'500': '#ffadad',
						'600': '#e69c9c',
						'700': '#bf8282',
						'800': '#996868',
						'900': '#7d5555'
					},
					'light-blue': {
						'50': '#fafdff',
						'100': '#f6faff',
						'200': '#e8f3ff',
						'300': '#daebff',
						'400': '#bfddff',
						'500': '#a3ceff',
						'600': '#93b9e6',
						'700': '#7a9bbf',
						'800': '#627c99',
						'900': '#50657d'
					},
					'blue-md': {
						'50': '#f9fcff',
						'100': '#f3f9ff',
						'200': '#e0efff',
						'300': '#cde5ff',
						'400': '#a8d2ff',
						'500': '#82beff',
						'600': '#75abe6',
						'700': '#628fbf',
						'800': '#4e7299',
						'900': '#405d7d'
					},
					'blue': {
						'50': '#f4f7fb',
						'100': '#e9f0f6',
						'200': '#c9d9e9',
						'300': '#a8c3db',
						'400': '#6795c1',
						'500': '#2668a6',
						'600': '#225e95',
						'700': '#1d4e7d',
						'800': '#173e64',
						'900': '#133351'
					},
					'gray': {
						'50': '#f4f4f4',
						'100': '#e9eaea',
						'200': '#c9c9ca',
						'300': '#a9a9aa',
						'400': '#68696a',
						'500': '#27282a',
						'600': '#232426',
						'700': '#1d1e20',
						'800': '#171819',
						'900': '#131415'
					},
					'white': {
						'50': '#fdfefe',
						'100': '#fcfcfd',
						'200': '#f7f8f9',
						'300': '#f2f3f5',
						'400': '#e8ebee',
						'500': '#dee2e6',
						'600': '#c8cbcf',
						'700': '#a7aaad',
						'800': '#85888a',
						'900': '#6d6f71'
					}
				}

			}
		}
	}
}

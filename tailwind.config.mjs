/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: '425px',
				xl: '375px',
			},
			fontFamily: {
				/* Adobe Fonts (xtg2fqq) + Google fallback */
				zcool: ['"zcool-qingke-huangyou"', '"ZCOOL QingKe HuangYou"', 'sans-serif'],
				// Pure Avant Garde – no Chakra in this stack so it looks different
				avant: ['"itc-avant-garde-gothic-pro"', 'system-ui', 'sans-serif'],
				chakra: ['"chakra-petch"', '"Chakra Petch"', 'system-ui', 'sans-serif'],
				patrick: ['"patrick-hand-sc"', '"Patrick Hand SC"', 'cursive'],
				gochi: ['"patrick-hand-sc"', '"Patrick Hand SC"', 'cursive'],
			},
			colors: {
				'lime': '#A7FF20',
				'dark': '#1A1A1A',
				'cyan': '#00D4FF',
				'magenta': '#FF2D92',
				'ragebite-yellow': '#CAE00D',
			},
		},
	},
	plugins: [],
};

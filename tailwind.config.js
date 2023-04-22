/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		colors: {
			'accent-blue': {
				extraDark: '#28364d',
				dark: '#4f6c99',
				mid: '#B9D1E1',
				light: '#F5F9FF',
			},
			white: '#FEFCFD',
			black: '#050505',
			bone: '#DDDBCB',
			oldLace: '#F5F1E3',
			red: '#D7263D',
			orange: '#E98A15',
		},
		extend: {},
	},
	plugins: [],
};

const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				md: '1.5625rem',
				lg: '2rem',
				xl: '3.75rem',
				'2xl': '3.75rem',
			},
		},
		extend: {
			colors: {
				colorPrimary: '#3588C6',
				colorHeading: '#000033',
				colorText: '#606060',
				colorSuccess: '#128C7E',
				colorGray: '#F4F5F7',
			},
			fontFamily: {
				sans: ['Cairo', ...fontFamily.sans],
			},
			borderRadius: {
				default: '10px',
			},
			boxShadow: {
				default: '0px 2px 4px rgba(0, 0, 0, 0.08)',
			},
		},
	},
	plugins: [],
};

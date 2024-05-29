/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}','./docs/*.html' , join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],			

	theme: {
		extend: {}
	},

	plugins: []
};

module.exports = config;

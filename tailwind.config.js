module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				main: {
					DEFAULT: "#363B4E",
					light: "#494D5C",
					mediumDark: "#222636",
					dark: "#11131C",
				},
				primary: {
					DEFAULT: "#927FBF",
					dark: "#8B75BF",
					light: "#C4BBF0",
				},
				colorText: {
					primary: "#F2F2F2",
					secondary: "#818182",
				},
			},
		},
		fontFamily: {
			sans: ["Open-sans"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

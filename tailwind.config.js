/** @format */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{html,js}", "./src/**/*.vue"],
	darkMode: "class",
	theme: {
		colors: {
			white: "#ffffff",
			black: "#0a0a0a",
			darkgray: "#333333",
			darkyellow: "#D09512",
			lightgray: "#7A7A7A",
			bordergray: "#363636",
			announcementgray: "#515050",
			blush: {
				50: "#f47fb3",
				100: "#ffe4e6",
				200: "#f799c2",
				300: "#fcb4d1",
				400: "#ffcedf",
				500: "#e93387", // primary
				600: "#cc0b4e",
				700: "#b30341",
				800: "#980238",
				900: "#7d022d",
			},
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},

			fontFamily: {
				"monte-carlo": ['"MonteCarlo"', ...defaultTheme.fontFamily.sans],
				libre: ['"Libre Bodoni"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};

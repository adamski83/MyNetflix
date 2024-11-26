type Theme = {
	light: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
		dimGray: string;
		lightGray: string;
		lightGrayHover: string;
		darkGray: string;
		parisBlue: string;
		infoHoverBox: string;
		NetflixGradientPurple: string;
		NetflixGradientPink: string;
		zIndex: {
			modal: number;
			tooltip: number;
			dropdown: number;
			navbar: number;
		};
	};
	dark: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
		dimGray: string;
		zIndex: {
			modal: number;
			tooltip: number;
			dropdown: number;
			navbar: number;
		};
	};
};

export const themes: Theme = {
	light: {
		primary: "#e50914",
		secondary: "#b81d24",
		background: "#ffffff",
		text: "#000000",
		dimGray: "#696969",
		lightGray: "rgba(155, 155, 155, 0.9)",
		lightGrayHover: "rgba(55, 55, 55, 0.4)",
		darkGray: "rgba(155, 155, 155, 0.4)",
		parisBlue: "rgba(31, 38, 135, 0.37)",
		infoHoverBox: "rgba(255, 255, 255, 0.4)",
		NetflixGradientPurple: "rgba(2, 0, 36, 1)",
		NetflixGradientPink: "rgba(148, 22, 94, 1)",
		zIndex: {
			modal: 1000,
			tooltip: 2000,
			dropdown: 3000,
			navbar: 4000,
		},
	},
	dark: {
		primary: "#e50914",
		secondary: "#b81d24",
		background: "#333",
		text: "#ffffff",
		dimGray: "#696969",
		zIndex: {
			modal: 1000,
			tooltip: 2000,
			dropdown: 3000,
			navbar: 4000,
		},
	},
};

type Breakpoints = {
	mobile: string;
	tablet: string;
	laptop: string;
	desktop: string;
};

export const breakpoints: Breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

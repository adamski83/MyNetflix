type Theme = {
	light: {
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
		background: "#000000",
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

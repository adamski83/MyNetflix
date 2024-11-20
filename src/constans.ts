export const currencies = [
	{ value: "EN", label: "English" },
	{ value: "DE", label: "Deutsch" },
];

export const footerData = [
	"Häufig gestellte Fragen (FAQ)",
	"Konto",
	"Karriere",
	"Geschenkkarten kaufen",
	"Datenschutz",
	"Kontakt",
	"Rechtliche Hinweise",
	"Mitglidschaft Kündigen",
	"Medien-Center",
	"Netflix-Schop",
	"So Könne Sie Netflix ansehen",
	"Cookies-Einstellungen",
	"Geschwindigkeitstest",
	"Nur auf Netflix",
	"Hilfe-Center",
	"Anlegerbeziehungen",
	"Geschebnkkarten einlösen",
	"Nutzungbedingungen",
	"Impressum",
	"Gesetzliche Garantie",
	"Wahlmöglichkeiten für Werbung",
];
export const footerLinks = footerData.map((item) => {
	const formattedLabel = item.toLowerCase().replace(/[^a-z0-9]+/g, "-");
	return {
		label: item,
		link: `/${formattedLabel}`,
	};
});

import { Faq } from "./components/Pages/Faq/Faq";
import { Login } from "./components/Pages/Login/Login";
import { Career } from "./components/Pages/Career/Career";
import { Members } from "./components/Pages/Members/Members";
import { PrivacyPolicy } from "./components/Pages/PrivacePolicy/PrivacyPolicy";
import { Contact } from "./components/Pages/Contact/Contact";

export const currencies = [
	{ value: "EN", label: "English" },
	{ value: "DE", label: "Deutsch" },
];

export const footerData = [
	{
		label: "Häufig gestellte Fragen (FAQ)",
		link: "/faq",
		component: Faq,
	},
	{ label: "Konto", link: "/konto", component: Login },
	{ label: "Karriere", link: "/karriere", component: Career },
	{ label: "Mitglieder", link: "/members", component: Members },
	{ label: "Datenschutz", link: "/privacy", component: PrivacyPolicy },
	{ label: "Kontakt", link: "/contact", component: Contact },
];

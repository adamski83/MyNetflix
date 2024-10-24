import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: {
				version: "detect", // Automatyczne wykrywanie wersji React
			},
		},
		rules: {
			indent: ["error", "tab"], // Tabulator na 2 spacje
			quotes: ["error", "double"], // Podwójne cudzysłowy
			"react/jsx-uses-react": "off", // Wyłączone dla React 17+
			"react/react-in-jsx-scope": "off", // Wyłączone dla React 17+
			"react/prop-types": "off", // Wyłączone dla TypeScript
			"@typescript-eslint/explicit-module-boundary-types": "off", // Wyłączone dla TypeScript
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			], // Ignorowanie nieużywanych zmiennych zaczynających się od _
		},
	},
];

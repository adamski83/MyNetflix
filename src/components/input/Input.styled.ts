import styled from "styled-components";
import { themes } from "../../themes";

const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

export const InputContainer = styled.div`
	width: 90%; // Kontener zajmuje 90% szerokości rodzica
	max-width: 600px; // Maksymalna szerokość
	margin: 0 auto;
	padding: 0 1em;

	@media (max-width: ${breakpoints.mobile}) {
		width: 95%;
		padding: 0 0.5em;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 1em;
	border: 1px solid ${themes.light.dimGray};
	color: ${themes.light.background};
	border-radius: 2em;
	text-align: center;
	transition: all 0.3s ease-in-out;
	box-sizing: border-box; // Zapobiega przekraczaniu szerokości

	@media (max-width: ${breakpoints.mobile}) {
		font-size: 0.875em;
		padding: 0.75em;
		height: 2.5em;
	}

	@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
		font-size: 1em;
		padding: 0.85em;
		height: 3em;
	}
`;

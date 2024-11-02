import styled from "styled-components";

import { themes } from "../../themes";

export const InoputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2em 0 2em 0;
	gap: 1rem;
	width: 100%;
`;

export const Input = styled.input`
	height: 4em;
	margin: 0 auto;
	border: 1px solid ${themes.light.dimGray};
	color: ${themes.light.background};
	border-radius: 2em;
	text-align: center;
	font-size: 1em;
	width: 90%;

	@media (max-width: 480px) {
		height: 3em;
	}

	&::placeholder {
		color: ${themes.light.background};
		opacity: 0.6;
	}
`;

export const Button = styled.button`
	margin: 0 auto;
	height: 4em;
	width: 50%;
	font-weight: bold;
	font-size: 1em;
	background-color: ${themes.light.primary};
	color: ${themes.light.background};
	outline: none;
	border: none;
	border-radius: 2em;

	@media (max-width: 480px) {
		height: 3em;
	}
`;

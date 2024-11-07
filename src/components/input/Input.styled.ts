import styled from "styled-components";

import { themes } from "../../themes";

export const InoputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2em 0 2em 0;
	gap: 1rem;
	width: 90%;
`;

export const Input = styled.input`
	margin: 0 auto;
	padding: 1em;
	border: 1px solid ${themes.light.dimGray};
	color: ${themes.light.background};
	border-radius: 2em;
	text-align: center;
	font-size: 1em;
	width: 100%;

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
	width: 50%;
	padding: 1em;
	font-weight: 700;
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

import styled from "styled-components";

import { typography } from "../../styles/typography";
import { themes } from "../../themes";

export const NavbarContainer = styled.nav`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const Logo = styled.img`
	width: 8em;
	height: 6em;

	@media (max-width: 768px) {
		width: 30%;
		margin-right: 2em;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	width: 25%;
	align-items: center;
	justify-content: center;
	margin-right: 2em;
	margin-left: 3em;

	@media (max-width: 768px) {
		flex-direction: row;
		width: 70%;
		margin-right: 0;
	}
`;

export const Button = styled.button`
	background-color: ${themes.light.background};
	font-family: ${typography.fontFamily.secondary};
	padding: 0.7em 1.5em;
	width: 8em;
	border-radius: 5%;
	color: ${themes.light.text};
	border-radius: 25px;
	outline: none;
	font-weight: 700;
	text-align: center;
	cursor: pointer;

	@media (max-width: 768px) {
		display: flex;
		width: 8em;
		font-size: 0.8rem;
		padding: 0.7em 1.5em;
		margin-right: 1em;
		margin-left: 0.5em;
	}
`;

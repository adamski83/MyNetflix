import styled from "styled-components";

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
		width: 8em;
		margin-right: 2em;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	width: 25%;
	align-items: center;
	justify-content: space-between;
	margin-right: 2em;

	@media (max-width: 768px) {
		flex-direction: row;
		width: 50%;
		margin-right: 0;
	}
`;

export const Button = styled.button`
	background-color: ${themes.light.background};
	padding: 0.7em 1.5em;
	width: 8em;
	border-radius: 5%;
	color: ${themes.light.text};
	border-radius: 25px;
	outline: none;
	text-align: center;
	cursor: pointer;

	@media (max-width: 768px) {
		height: 2.75em;
		display: flex;
		font-size: 0.9rem;
		font-weight: bold;
		padding: 0.7em 1.5em;
		margin-right: 1em;
		margin-left: 0.5em;
	}
`;

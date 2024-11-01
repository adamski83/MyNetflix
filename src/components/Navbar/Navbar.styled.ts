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
	width: 12em;

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
	background-color: ${themes.light.primary};
	padding: 0.7em 1.5em;
	height: 2.4em;
	width: 8em;
	line-height: 100%;
	border-radius: 5%;
	color: ${themes.light.background};
	border: none;
	cursor: pointer;
	font-size: 1rem;

	@media (max-width: 768px) {
		width: 7em;
		height: 2.75em;
		display: flex;
		font-size: 0.9rem;
		padding: 0.7em 1.5em;
		margin-right: 1em;
	}
`;

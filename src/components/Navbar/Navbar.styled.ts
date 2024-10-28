import styled from "styled-components";

import { themes } from "../../themes";

export const NavbarContainer = styled.nav`
	width: 100%;
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 2em;
	position: fixed;
	top: 0;
	z-index: 1000;
`;

export const Logo = styled.img`
	width: 12em;

	@media (max-width: 768px) {
		width: 8em;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: row;
		width: 50%;
	}
`;

export const Button = styled.button`
	background-color: ${themes.light.primary};
	padding: 0.7em 1.5em;
	height: 2.4em;
	line-height: 100%;
	border-radius: 5%;
	color: ${themes.light.background};
	border: none;
	cursor: pointer;
	font-size: 1rem;
	margin: 0 1em 0 1em;

	@media (max-width: 768px) {
		width: 100%;
		font-size: 0.9rem;
		padding: 0.7em 1.5em;
	}
`;


import styled from "styled-components";

import { typography } from "../../styles/typography";
import { breakpoints, themes } from "../../themes";

export const NavbarContainer = styled.nav`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const Logo = styled.img`
	width: 120px;
	height: 100px;

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
	margin-right: 32px;
	margin-left: 48px;

	@media (max-width: ${breakpoints.tablet}) {
		flex-direction: row;
		width: 70%;
		margin-right: 0;
	}
`;

export const Button = styled.button`
	background-color: ${themes.light.background};
	font-family: ${typography.fontFamily.secondary};
	padding: 10px 20px;
	width: 120px;
	border-radius: 5%;
	color: ${themes.light.text};
	border-radius: 25px;
	outline: none;
	font-weight: 700;
	text-align: center;
	cursor: pointer;

	@media (max-width: ${breakpoints.tablet}) {
		display: flex;
		width: 12px;
		font-size: 12px;
		padding: 10px 20px;
		margin-right: 16px;
		margin-left: 8px;
	}
`;

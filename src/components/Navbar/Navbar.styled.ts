import styled from "styled-components";

import { breakpoints, themes } from "../../themes";

export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px 0 10px;
	background-color: transparent;
	transition: background-color 0.3s ease;

	@media (max-width: ${breakpoints.tablet}) {
		padding: 8px 16px;
	}
`;

export const Logo = styled.img`
	width: 100px;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`;

export const NavItems = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const NavItem = styled.a`
	color: ${themes.light.text};
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s ease;
	&:hover {
		color: ${themes.light.primary};
	}
`;

export const NavButton = styled.button`
	background-color: ${themes.light.primary};
	color: ${themes.light.background};
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${themes.light.text};
	}

	@media (max-width: ${breakpoints.mobile}) {
		width: 100%;
		padding: 10px;
	}
`;

export const MobileMenuButton = styled.button`
	display: none;
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;

	@media (max-width: ${breakpoints.tablet}) {
		display: block;
	}
`;

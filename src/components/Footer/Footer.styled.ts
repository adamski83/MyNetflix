import styled from "styled-components";

import { themes } from "../../themes";

export const FooterWrapContainer = styled.footer`
	background-color: ${themes.light.text};
	color: ${themes.light.background};
	padding: 16px;
	text-align: center;
	display: flex;
	justify-content: center;
	gap: 16px;
	flex-wrap: wrap;
`;
export const WrapperBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: ${themes.light.text};
`;

export const FooterItemWrap = styled.div`
	width: 300px;
`;

export const PhoneLink = styled.a`
	color: inherit;
	text-decoration: none;
	transition: color 0.3s ease;

	&:hover {
		text-decoration: underline;
	}
`;

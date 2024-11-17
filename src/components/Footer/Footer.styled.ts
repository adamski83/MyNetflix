import styled from "styled-components";

import { themes } from "../../themes";

export const FooterWrapContainer = styled.div`
	background-color: ${themes.light.text};
	color: ${themes.light.background};
	padding: 16px;
	text-align: center;
	display: flex;
	justify-content: center;
	gap: 16px;
	flex-wrap: wrap;
`;

export const FooterItemWrap = styled.div`
	width: 300px;
`;

import styled from "styled-components";

import { breakpoints, themes } from "../../themes";

export const ConvinientWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 16px;
	gap: 16px;

	@media screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const ConvinientItem = styled.div`
	display: flex;

	width: 100%;
	height: 100px;
	background-color: ${themes.light.lightGrayHover};
	border-radius: 8px;
	padding: 16px;
	justify-content: space-between;
	align-items: center;

	@media screen and (min-width: ${breakpoints.tablet}) {
		width: 30%;
	}
`;

export const ConvinientIcon = styled.img`
	width: 50px;
	height: 50px;
`;

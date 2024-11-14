import styled from "styled-components";

import { breakpoints, themes } from "../../themes";

type AdsPlanWrapper = {
	direction?: string;
};

export const AdsPlanWrapper = styled.div<AdsPlanWrapper>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	padding: 32px;
	flex-wrap: wrap;
	justify-content: center;
	gap: 32px;
	background: linear-gradient(
		180deg,
		${themes.light.NetflixGradientPurple} 0%,
		${themes.light.NetflixGradientPink} 53%
	);

	@media (max-width: ${breakpoints.tablet}) {
		padding: 16px;
		display: flex;
		flex-direction: column;
	}
`;

interface ImageContainerProps {
	direction?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "column"};
	width: 90%;
	background: none;
	max-width: 1200px;
	margin: 32px auto;

	@media (max-width: ${breakpoints.tablet}) {
		width: 95%;
		margin: 16px auto;
		align-items: center;
	}
`;

export const StyledImage = styled.img`
	width: 70px;
	height: auto;
	background: none;
	object-fit: cover;
	border-radius: 8px;
`;

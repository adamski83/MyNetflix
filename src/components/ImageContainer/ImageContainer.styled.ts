// src/components/adsPlan/AdsPlan.styled.ts
import styled from "styled-components";

import { themes } from "../../themes";

const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

export const AdsPlanWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	padding: 2rem;
	background: linear-gradient(
		180deg,
		${themes.light.NetflixGradientPurple} 0%,
		${themes.light.NetflixGradientPink} 53%
	);

	@media (max-width: ${breakpoints.tablet}) {
		padding: 1rem;
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
	max-width: 1200px;
	margin: 2rem auto;

	@media (max-width: ${breakpoints.tablet}) {
		width: 95%;
		margin: 1rem auto;
		align-items: center;
	}
`;

export const StyledImage = styled.img`
	width: 70px;
	height: auto;
	object-fit: cover;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

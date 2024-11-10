import styled from "styled-components";
import { WrapperProps } from "./Wrapper.types";

const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

export const StyledWrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "column"};
	gap: ${({ gap }) => gap || "1rem"};
	padding: ${({ padding }) => padding || "0"};
	margin: ${({ margin }) => margin || "0"};
	align-items: ${({ align }) => align || "center"};
	justify-content: ${({ justify }) => justify || "center"};
	width: 75%;

	@media (max-width: ${breakpoints.mobile}) {
		flex-direction: column;
		padding: 0.5rem;
		gap: 0.5rem;
	}

	@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}

	@media (min-width: ${breakpoints.tablet}) {
		flex-direction: ${({ direction }) => direction || "row"};
	}
`;

import styled from "styled-components";

import { breakpoints } from "../../themes";
import { WrapperProps } from "./Wrapper.types";

export const StyledWrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "column"};
	gap: ${({ gap }) => gap || "16px"};
	padding: ${({ padding }) => padding || "0"};
	margin: ${({ margin }) => margin || "0"};
	align-items: ${({ align }) => align || "center"};
	justify-content: ${({ justify }) => justify || "center"};
	width: 75%;

	@media (max-width: ${breakpoints.mobile}) {
		flex-direction: column;
		padding: 8px;
		gap: 8px;
	}

	@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
		flex-direction: column;
		padding: 16px;
		gap: 16px;
	}

	@media (min-width: ${breakpoints.tablet}) {
		flex-direction: ${({ direction }) => direction || "row"};
	}
`;

import { TypographyProps, TypographyVariant } from "./Typography.types";
import { themes } from "../../themes";

import styled, { css } from "styled-components";

const getVariantStyles = (variant: TypographyVariant = "body1") => {
	const variants = {
		h1: css`
			font-size: 2.5rem;
			font-weight: 700;
			line-height: 1.2;
			@media (max-width: 768px) {
				font-size: 2rem;
			}
		`,
		h2: css`
			font-size: 2rem;
			font-weight: 600;
			line-height: 1.3;
			@media (max-width: 768px) {
				font-size: 1.75rem;
			}
		`,
		h3: css`
			font-size: 1.75rem;
			font-weight: 600;
			line-height: 1.4;
			@media (max-width: 768px) {
				font-size: 1.5rem;
			}
		`,
		h4: css`
			font-size: 1.5rem;
			font-weight: 500;
			line-height: 1.4;
			@media (max-width: 768px) {
				font-size: 1.25rem;
			}
		`,
		body1: css`
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
		`,
		body2: css`
			font-size: 0.875rem;
			font-weight: 400;
			line-height: 1.43;
		`,
		caption: css`
			font-size: 0.75rem;
			font-weight: 400;
			line-height: 1.66;
		`,
	};
	return variants[variant];
};

export const StyledTypography = styled.div<TypographyProps>`
	margin: 0;
	${({ variant }) => getVariantStyles(variant)};
	text-align: ${({ align }) => align || "left"};
	color: ${({ color }) => color || themes.light.text};
	font-weight: ${({ weight }) => weight || "inherit"};
	margin-bottom: ${({ gutterBottom }) => (gutterBottom ? "0.35em" : 0)};
`;

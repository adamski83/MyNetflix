import styled, { css } from "styled-components";

import { breakpoints, themes } from "../../themes";
import { TypographyProps, TypographyVariant } from "./Typography.types";

const getVariantStyles = (variant: TypographyVariant = "body1") => {
	const variants = {
		h1: css`
			font-size: 40px;
			font-weight: 700;
			line-height: 1.2;
			@media (max-width: ${breakpoints.tablet}) {
				font-size: 32px;
			}
		`,
		h2: css`
			font-size: 32px;
			font-weight: 600;
			line-height: 1.3;
			@media (max-width: ${breakpoints.tablet}) {
				font-size: 28px;
			}
		`,
		h3: css`
			font-size: 30px;
			font-weight: 600;
			line-height: 1.4;
			@media (max-width: ${breakpoints.tablet}) {
				font-size: 28px;
			}
		`,
		h4: css`
			font-size: 22px;
			font-weight: 500;
			line-height: 1.4;
			@media (max-width: ${breakpoints.tablet}) {
				font-size: 18px;
			}
		`,
		body1: css`
			font-size: 16px;
			font-weight: 400;
			line-height: 1.5;
		`,
		body2: css`
			font-size: 10px;
			font-weight: 400;
			line-height: 1.43;
		`,
		caption: css`
			font-size: 10px;
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
	width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

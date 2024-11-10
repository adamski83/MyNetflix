import styled, { css } from "styled-components";

import { themes } from "../../themes";
import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

const getVariantStyles = (variant: ButtonVariant = "primary") => {
	const variants = {
		primary: css`
			background-color: ${themes.light.primary};
			color: ${themes.light.background};
			border: none;

			&:hover {
				background-color: ${themes.light.secondary};
			}
		`,
		secondary: css`
			background-color: ${themes.light.secondary};
			color: ${"white"};
			border: none;
		`,
		outline: css`
			background-color: transparent;
			border: 1px solid ${themes.light.parisBlue};
			color: ${themes.light.background};
		`,
		text: css`
			background-color: transparent;
			border: none;
			color: ${themes.light.background};
			padding: 0;

			&:hover {
				text-decoration: underline;
			}
		`,
	};
	return variants[variant];
};

const getSizeStyles = (size: ButtonSize = "medium") => {
	const sizes = {
		small: css`
			padding: 8px 16px;
			font-size: 14px;
		`,
		medium: css`
			padding: 12px 20px;
			font-size: 16px;
		`,
		large: css`
			padding: 16px 24px;
			font-size: 18px;
		`,
	};
	return sizes[size];
};

export const StyledButton = styled.button<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	border-radius: 4px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	${({ variant }) => getVariantStyles(variant)}
	${({ size }) => getSizeStyles(size)}
  ${({ isFullWidth }) =>
		isFullWidth &&
		css`
			width: 100%;
		`}
  ${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
			cursor: not-allowed;
		`}
  
	&:hover {
		scale: 1.05;
	}
`;

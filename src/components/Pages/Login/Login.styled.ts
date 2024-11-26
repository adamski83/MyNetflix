import styled from "styled-components";

import { breakpoints, themes } from "../../../themes";
import { LoginProps } from "./Login.styled.types";

export const Container = styled.div<LoginProps>`
	display: flex;
	flex-direction: column;
	align-items: ${({ align }) => align || "center"};
	height: 100vh;
	width: ${({ width }) => width || "100%"};
	padding: ${({ padding }) => padding || "0"};
	gap: 16px;
`;

export const Logo = styled.img`
	width: 100px;
	transition: transform 0.3s ease;
`;

export const Input = styled.input`
	width: 100%;
	padding: 16px;
	background-color: ${themes.light.darkGray};
	color: ${themes.light.background};
	border: 1px solid ${themes.light.dimGray};
	border-radius: 4px;
	font-size: 16px;
	line-height: 1.5;

	&::placeholder {
		color: ${themes.light.dimGray};
		opacity: 0.7;
	}

	&:focus {
		outline: none;
		border-color: ${themes.light.NetflixGradientPurple};
	}

	@media (max-width: ${breakpoints.tablet}) {
		padding: 13px;
		font-size: 14px;
	}
`;

export const Checkbox = styled.input`
	border-radius: 2px;
	height: 26px;
	width: 26px;
	cursor: pointer;
`;

export const Label = styled.label`
	color: ${themes.light.dimGray};
`;

export const LabelWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

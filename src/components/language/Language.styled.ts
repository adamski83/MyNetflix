import styled from "styled-components";
import { themes } from "../../themes";

export const StyledSelect = styled.select`
	background-color: ${themes.light.dimGray};
	color: ${themes.light.text};
	border: 1px solid ${themes.light.text};
	padding: 10px;
	border-radius: 4px;
`;

export const StyledOption = styled.option`
	background-color: ${themes.light.text};
	color: ${themes.light.background};
`;

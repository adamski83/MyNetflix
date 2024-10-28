import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { currencies } from "../../constans";
import { themes } from "../../themes";
import { SM } from "../../variable";

const StyledSelect = styled.select`
	background-color: ${themes.light.dimGray};
	color: ${themes.light.text};
	border: 1px solid ${themes.light.text};
	padding: 10px;
	border-radius: 4px;
`;

const StyledOption = styled.option`
	background-color: ${themes.light.text};
	color: ${themes.light.background};
`;

export const Language = () => {
	const isMobile = useMediaQuery({ maxWidth: SM });

	return (
		<StyledSelect defaultValue="EN">
			{currencies.map((option) => (
				<StyledOption
					key={option.value}
					value={option.value}
				>
					{isMobile ? option.value : option.label}
				</StyledOption>
			))}
		</StyledSelect>
	);
};

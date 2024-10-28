import { useMediaQuery } from "react-responsive";

import { currencies } from "../../constans";
import { SM } from "../../variable";
import * as S from "./Language.styled";

export const Language = () => {
	const isMobile = useMediaQuery({ maxWidth: SM });

	return (
		<S.StyledSelect defaultValue="EN">
			{currencies.map((option) => (
				<S.StyledOption
					key={option.value}
					value={option.value}
				>
					{isMobile ? option.value : option.label}
				</S.StyledOption>
			))}
		</S.StyledSelect>
	);
};

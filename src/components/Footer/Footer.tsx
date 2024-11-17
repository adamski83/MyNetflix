import { Link } from "react-router-dom";

import { footerData } from "../../constans.ts";
import { themes } from "../../themes";
import { Typography } from "../typography/Typography";
import * as S from "./Footer.styled.ts";

export const Footer = () => {
	return (
		<S.FooterWrapContainer>
			<Typography
				variant="h6"
				color={themes.light.background}
			>
				Fragen? Einfach anrufen:123-987-345
			</Typography>
			<S.FooterWrapContainer>
				{footerData.map((item) => (
					<S.FooterItemWrap key={item}>
						<Typography
							variant="body1"
							color={themes.light.background}
						>
							<Link to={`/${item}`}>{item}</Link>
						</Typography>
					</S.FooterItemWrap>
				))}
			</S.FooterWrapContainer>
		</S.FooterWrapContainer>
	);
};

import { Link } from "react-router-dom";

import { footerLinks } from "../../constans.ts";
import { themes } from "../../themes";
import { Typography } from "../typography/Typography";
import * as S from "./Footer.styled.ts";

export const Footer = () => {
	return (
		<S.WrapperBox>
			<Typography
				variant="h6"
				color={themes.light.background}
			>
				<S.PhoneLink href="tel:123-987-345">
					Fragen? Einfach anrufen:123-987-345
				</S.PhoneLink>
			</Typography>
			<S.FooterWrapContainer>
				{footerLinks.map((item) => (
					<S.FooterItemWrap key={item.link}>
						<Typography
							variant="body1"
							color={themes.light.background}
						>
							<Link to={`${item.link}`}>{item.label}</Link>
						</Typography>
					</S.FooterItemWrap>
				))}
			</S.FooterWrapContainer>
		</S.WrapperBox>
	);
};

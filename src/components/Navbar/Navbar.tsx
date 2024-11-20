import * as S from "./Navbar.styled";

import NetflixLogo from "../../assets/Netflix.png";
import { Button } from "../Button/Button";
import { Language } from "../language/Language";

export const Navbar = () => {
	return (
		<S.NavContainer>
			<S.Logo
				src={NetflixLogo}
				alt="Netflix"
			/>
			<S.NavItems>
				<Language />
				<Button variant="primary">Sign In</Button>
			</S.NavItems>
		</S.NavContainer>
	);
};

import NetflixLogo from "../../assets/Netflix.png";
import { Language } from "../language/Language";
import * as S from "./Navbar.styled";

export const Navbar = () => {
	return (
		<S.NavContainer>
			<S.Logo
				src={NetflixLogo}
				alt="Netflix"
			/>
			<S.MobileMenuButton></S.MobileMenuButton>
			<S.NavItems>
				<Language />
				<S.NavButton>Sign In</S.NavButton>
			</S.NavItems>
		</S.NavContainer>
	);
};

import NetflixLogo from "../../assets/Netflix.png";
import { Language } from "../language/Language";
import * as S from "./Navbar.styled";

export const Navbar = () => {
	return (
		<S.NavbarContainer>
			<S.Logo
				src={NetflixLogo}
				alt="Netflix Logo"
			/>
			<S.NavLinks>
				<Language />
				<S.Button>Einloggen</S.Button>
			</S.NavLinks>
		</S.NavbarContainer>
	);
};

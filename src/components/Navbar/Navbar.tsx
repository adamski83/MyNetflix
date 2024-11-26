import NetflixLogo from "../../assets/Netflix.png";
import { Button } from "../Button/Button";
import { Language } from "../language/Language";
import * as S from "./Navbar.styled";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<S.NavContainer>
			<S.Logo
				src={NetflixLogo}
				alt="Netflix"
				onClick={() => navigate("/")}
			/>
			<S.NavItems>
				<Language />
				<Button variant="primary">Sign In</Button>
			</S.NavItems>
		</S.NavContainer>
	);
};

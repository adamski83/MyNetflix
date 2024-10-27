import styled from "styled-components";

import NetflixLogo from "../../assets/Netflix.png";
import { Language } from "../language/Language";

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Image = styled.img`
	width: 150px;
	height: 150px;
`;
export const Navbar = () => {
	return (
		<Wrapper>
			<Image
				src={NetflixLogo}
				alt="Netflix Logo"
			/>
			<h4>ddd</h4>
		</Wrapper>
	);
};

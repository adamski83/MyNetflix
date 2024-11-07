import styled from "styled-components";

import NetflixBcg from "../../assets/NetflixBcg.jpg";

interface BackgroundProps {
	children?: React.ReactNode;
}

const MainBackground = styled.div<BackgroundProps>`
	height: auto;

	background-image: url("${NetflixBcg}");
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: white;
`;

export const MainBackgroundComponent = ({ children }: BackgroundProps) => {
	return <MainBackground>{children}</MainBackground>;
};

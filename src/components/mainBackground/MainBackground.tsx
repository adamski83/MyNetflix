import styled from "styled-components";

import NetflixBcg from "../../assets/NetflixBcg.jpg";

interface BackgroundProps {
	imageUrl?: string;
	children?: React.ReactNode;
}

const MainBackground = styled.div<BackgroundProps>`
	height: 100vh;

	background-image: url(${(props) => props.imageUrl});
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: white;
`;

export const MainBackgroundComponent = ({ children }: BackgroundProps) => {
	return <MainBackground imageUrl={NetflixBcg}>{children}</MainBackground>;
};

import styled from "styled-components";

import NetflixBcg from "../../assets/NetflixBcg.jpg";

interface BackgroundProps {
	imageurl?: string;
	children?: React.ReactNode;
}

const MainBackground = styled.div<BackgroundProps>`
	height: auto;

	background-image: url(${(props) => props.imageurl});
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: white;
`;

export const MainBackgroundComponent = ({ children }: BackgroundProps) => {
	return <MainBackground imageurl={NetflixBcg}>{children}</MainBackground>;
};

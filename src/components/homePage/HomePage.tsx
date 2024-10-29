import styled from "styled-components";
import { ReactNode } from "react";
import "../../index.css";

interface HomePageProps {
	children: ReactNode;
}
const Wrapper = (props: HomePageProps) => styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HomePage = () => {
	return <Wrapper>1</Wrapper>;
};

import styled from "styled-components";

import { themes } from "../../themes";

export const InfoBoxStyledContainer = styled.div`
	width: 75%;
	font-size: 0.9rem;
	background: rgba(155, 155, 155, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid ${themes.light.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${themes.light.background};
	padding: 2px;
	font-family: "Roboto", sans-serif;
	margin-top: 10px;
	transition: 0.5s cubic-bezier(0.33, 0, 0, 1);
	&:hover {
		scale: 1.05;
		background: rgba(255, 255, 255, 0.4);
	}
`;
export const Button = styled.button`
	background-color: rgba(155, 155, 155, 0.9);
	color: ${themes.light.text};
	border: none;
	border-radius: 5px;
	padding: 8px 15px;
	font-size: 1rem;
	cursor: pointer;
	margin-top: 20px;
	&:hover {
		background-color: rgba(55, 55, 55, 0.4);
	}
`;

import styled from "styled-components";

const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

export const DescriptionBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 25px;
	border-radius: 10px;
	margin-left: 30px;
	width: 300px;
	backdrop-filter: blur(4.5px);
	-webkit-backdrop-filter: blur(4.5px);
	border-radius: 10px;

	@media (max-width: ${breakpoints.tablet}) {
		margin: auto;
	}
`;

export const RowWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid #e0e0e0;
	margin-left: 10px;
	margin-bottom: 10px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2px;
`;

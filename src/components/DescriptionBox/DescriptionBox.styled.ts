import styled from "styled-components";

import { breakpoints } from "../../themes";

export const DescriptionBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 25px;
	border-radius: 10px;
	margin-left: 30px;
	width: 90%;
	backdrop-filter: blur(4.5px);
	backdrop-filter: blur(4.5px);
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

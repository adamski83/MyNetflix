import styled from "styled-components";

import { breakpoints, themes } from "../../themes";

export const AccordionWrapper = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	border-radius: 8px;
	overflow: hidden;
`;

export const AccordionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	background: ${({ theme }) => themes.light.dimGray};
	color: ${({ theme }) => themes.light.background};
	cursor: pointer;
	transition: background 0.3s ease;

	&:hover {
		background: ${({ theme }) => themes.light.lightGray};
	}

	@media (max-width: ${breakpoints.tablet}) {
		padding: 12px;
	}
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
	max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
	overflow: hidden;
	transition: max-height 0.3s ease-in-out;
	background-color: ${({ theme }) => themes.light.darkGray};
`;

export const ContentInner = styled.div`
	padding: 16px;
	color: ${({ theme }) => themes.light.background};

	@media (max-width: ${breakpoints.tablet}) {
		padding: 13px;
		font-size: 14px;
	}
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
	transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
	transition: transform 0.3s ease;
`;

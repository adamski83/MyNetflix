import styled from "styled-components";

import { themes } from "../../themes";

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
	padding: 1rem;
	background-color: ${({ theme }) => themes.light.dimGray};
	color: ${({ theme }) => themes.light.background};
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => themes.light.lightGray};
	}

	@media (max-width: 768px) {
		padding: 0.8rem;
	}
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
	max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
	overflow: hidden;
	transition: max-height 0.3s ease-in-out;
	background-color: ${({ theme }) => themes.light.darkGray};
`;

export const ContentInner = styled.div`
	padding: 1rem;
	color: ${({ theme }) => themes.light.background};

	@media (max-width: 768px) {
		padding: 0.8rem;
		font-size: 0.9rem;
	}
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
	transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
	transition: transform 0.3s ease;
`;

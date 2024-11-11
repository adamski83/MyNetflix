import { useState } from "react";

import * as S from "./Accordion.styled";
import { AccordionProps } from "./Accordion.types";

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.AccordionWrapper>
			<S.AccordionHeader onClick={toggleAccordion}>
				{title}
				<S.Arrow isOpen={isOpen}>+</S.Arrow>
			</S.AccordionHeader>
			<S.AccordionContent isOpen={isOpen}>
				<S.ContentInner>{content}</S.ContentInner>
			</S.AccordionContent>
		</S.AccordionWrapper>
	);
};

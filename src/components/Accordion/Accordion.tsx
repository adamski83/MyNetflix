import * as S from "./Accordion.styled";
import { AccordionProps } from "./Accordion.types";
import { useState } from "react";

import { Button } from "../Button/Button";

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.AccordionWrapper>
			<Button
				isFullWidth
				justifyContent="left"
				variant="text"
				onClick={toggleAccordion}
			>
				{title}
				<S.Arrow
					isOpen={isOpen}
					aria-hidden="true"
				>
					+
				</S.Arrow>
			</Button>
			<S.AccordionContent isOpen={isOpen}>
				<S.ContentInner>{content}</S.ContentInner>
			</S.AccordionContent>
		</S.AccordionWrapper>
	);
};

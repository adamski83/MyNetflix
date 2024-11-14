import React from "react";
import { StyledWrapper } from "./Wrapper.styled";
import { WrapperProps } from "./Wrapper.types";

export const Wrapper: React.FC<
	WrapperProps & { children: React.ReactNode }
> = ({ children, ...props }) => {
	return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

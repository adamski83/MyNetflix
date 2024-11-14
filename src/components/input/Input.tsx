import React from "react";
import * as S from "./Input.styled";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
	props
) => {
	return <S.StyledInput {...props} />;
};

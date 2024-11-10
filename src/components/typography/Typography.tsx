import { StyledTypography } from "./Typography.styled";
import { TypographyProps } from "./Typography.types";

export const Typography: React.FC<
	TypographyProps & { children?: React.ReactNode }
> = ({ children, ...props }) => {
	return <StyledTypography {...props}>{children}</StyledTypography>;
};

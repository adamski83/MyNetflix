import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "medium",
	isFullWidth = false,
	isLoading = false,
	startIcon,
	endIcon,
	disabled,
	...props
}) => {
	return (
		<StyledButton
			variant={variant}
			size={size}
			isFullWidth={isFullWidth}
			disabled={disabled || isLoading}
			{...props}
		>
			{startIcon && <span className="start-icon">{startIcon}</span>}
			{isLoading ? "Loading..." : children}
			{endIcon && <span className="end-icon">{endIcon}</span>}
		</StyledButton>
	);
};

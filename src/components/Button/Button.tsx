import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "medium",
	isfullWidth = false,
	isloading = false,
	starticon,
	endicon,
	disabled,
	...props
}) => {
	return (
		<StyledButton
			variant={variant}
			size={size}
			isfullWidth={isfullWidth}
			disabled={disabled || isloading}
			{...props}
		>
			{starticon && <span className="start-icon">{starticon}</span>}
			{isloading ? "Loading..." : children}
			{endicon && <span className="end-icon">{endicon}</span>}
		</StyledButton>
	);
};

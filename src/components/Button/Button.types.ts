export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	isFullWidth?: boolean;
	isLoading?: boolean;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

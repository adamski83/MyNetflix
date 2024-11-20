import React, { CSSProperties } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	isfullWidth?: boolean;
	isloading?: boolean;
	starticon?: React.ReactNode;
	endicon?: React.ReactNode;
	justifycontent?: CSSProperties["justifyContent"];
}

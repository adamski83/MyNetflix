// src/components/Typography/Typography.types.ts
export type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "body1"
	| "body2"
	| "caption";

export type TypographyAlign = "left" | "center" | "right";

export interface TypographyProps {
	variant?: TypographyVariant;
	align?: TypographyAlign;
	color?: string;
	weight?: number;
	gutterBottom?: boolean;
	fullWidth?: boolean;
}

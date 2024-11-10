export interface WrapperProps {
	direction?: "row" | "column";
	gap?: string;
	padding?: string;
	margin?: string;
	align?: "flex-start" | "center" | "flex-end" | "stretch";
	justify?:
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"
		| "space-around";
}

import { MenuItem, TextField, useMediaQuery, useTheme } from "@mui/material";

import { currencies } from "../../constans";
import { SM } from "../../variable";

export const Language = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(SM));

	return (
		<TextField
			id='outlined-select-currency'
			color='primary'
			select
			defaultValue='EN'
			InputLabelProps={{
				style: { color: "white" },
			}}
			InputProps={{
				style: { color: "white" },
				classes: {
					notchedOutline: {
						"&:focus": {
							borderColor: "white",
						},
					},
				},
			}}
			SelectProps={{
				MenuProps: {
					PaperProps: {
						style: {
							backgroundColor: "black",
							color: "white",
						},
					},
				},
			}}>
			{currencies.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{isMobile ? option.value : option.label}
				</MenuItem>
			))}
		</TextField>
	);
};

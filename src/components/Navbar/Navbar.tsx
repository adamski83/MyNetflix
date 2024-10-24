import { Box, Button, Container } from "@mui/material";
import { Language } from "../language/Language";
import NetflixLogo from "../../assets/Netflix.png";

export const Navbar = () => {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<Box
				component='img'
				sx={{
					width: "auto",
					maxHeight: { xs: 133, md: 167 },
				}}
				src={NetflixLogo}
				alt='Netflix logo'></Box>
			<div></div>
			<Box sx={{ display: "flex" }}>
				<Language />
				<Button variant='contained' color='error' sx={{ marginLeft: 3 }}>
					Zaloguj
				</Button>
			</Box>
		</Container>
	);
};

"@mui/material";
import Box from "@mui/material/Box";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				height: "70vh",
				backgroundImage: "url('https://wallpaperaccess.com/full/204728.jpg')",
				backgroundSize: "cover",
			}}>
			<Navbar />
		</Box>
	);
}

export default App;
 

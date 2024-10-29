import { MainBackgroundComponent } from "./components/mainBackground/MainBackground";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

function App() {
	return (
		<>
			<MainBackgroundComponent>
				<Navbar />
			</MainBackgroundComponent>
		</>
	);
}

export default App;
 

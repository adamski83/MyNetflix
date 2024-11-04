import { Outlet, Route, Routes } from "react-router-dom";

import { AdsPlan } from "./components/adsPlan/AdsPlan";
import { InfoBox } from "./components/infoBox/InfoBox";
import { Input } from "./components/input/Input";
import { MainBackgroundComponent } from "./components/mainBackground/MainBackground";
import { Navbar } from "./components/Navbar/Navbar";
import { VideoPlayer } from "./components/videoPlayer/VideoPlayer";
import { GlobalStyles } from "./styles/GlobalStyles";

import "./App.css";

const Home = () => {
	return (
		<>
			<MainBackgroundComponent>
				<Navbar />
				<VideoPlayer />
				<Input />
				<InfoBox />
			</MainBackgroundComponent>
		</>
	);
};

function App() {
	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/subscription"
					element={<AdsPlan />}
				/>
				<Route
					path="/:id"
					element={<Outlet />}
				/>
			</Routes>
		</>
	);
}

export default App;

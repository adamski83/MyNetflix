import { Input } from "./components/input/Input";
import { MainBackgroundComponent } from "./components/mainBackground/MainBackground";
import { Navbar } from "./components/Navbar/Navbar";
import { VideoPlayer } from "./components/videoPlayer/VideoPlayer";

import "./App.css";

function App() {
	return (
		<>
			<MainBackgroundComponent>
				<Navbar />
				<VideoPlayer />
				<Input />
			</MainBackgroundComponent>
		</>
	);
}

export default App;

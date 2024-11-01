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
			</MainBackgroundComponent>
		</>
	);
}

export default App;

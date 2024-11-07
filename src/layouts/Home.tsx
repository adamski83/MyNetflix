import { InfoBox } from "../components/infoBox/InfoBox";
import { Input } from "../components/input/Input";
import { MainBackgroundComponent } from "../components/mainBackground/MainBackground";
import { Navbar } from "../components/Navbar/Navbar";
import { VideoPlayer } from "../components/videoPlayer/VideoPlayer";

export const Home = () => {
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

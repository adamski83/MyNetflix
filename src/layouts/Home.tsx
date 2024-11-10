import { Button } from "../components/Button/Button";
import { InfoBox } from "../components/infoBox/InfoBox";
import { Input } from "../components/input/Input";
import { MainBackgroundComponent } from "../components/mainBackground/MainBackground";
import { Navbar } from "../components/Navbar/Navbar";
import { VideoPlayer } from "../components/videoPlayer/VideoPlayer";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const Home = () => {
	return (
		<>
			<MainBackgroundComponent>
				<Navbar />
				<VideoPlayer />
				<Wrapper
					direction="row"
					gap="1rem"
					padding="1rem"
				>
					<Input />
					<Button
						variant="primary"
						size="large"
					>
						Loslegen
					</Button>
				</Wrapper>
				<InfoBox />
			</MainBackgroundComponent>
		</>
	);
};

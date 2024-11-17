import { Button } from "../components/Button/Button";
import { InfoBox } from "../components/infoBox/InfoBox";
import { Input } from "../components/input/Input";
import { MainBackgroundComponent } from "../components/mainBackground/MainBackground";
import { VideoPlayer } from "../components/videoPlayer/VideoPlayer";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const WelcomePage = () => {
	return (
		<>
			<MainBackgroundComponent>
				<VideoPlayer />
				<Wrapper
					direction="row"
					gap="16px"
					padding="16px"
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

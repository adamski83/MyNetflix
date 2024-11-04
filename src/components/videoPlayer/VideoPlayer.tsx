import startSiteVideo from "../../assets/startSiteVideo.mp4";
import * as S from "./VideoPlayer.styled";

export const VideoPlayer = () => {
	return (
		<S.VideoPlayerContainer>
			<S.Video
				autoPlay
				loop
				muted
			>
				<source
					src={startSiteVideo}
					type="video/mp4"
				/>
			</S.Video>
			<S.OverlayText>
				Unbegrenzte Filme, Serien und mehr <br />
				<S.Paragraph style={{ textAlign: "center" }}>
					Bereits ab 4.99$. Jetzt kundbar.
				</S.Paragraph>
			</S.OverlayText>
		</S.VideoPlayerContainer>
	);
};

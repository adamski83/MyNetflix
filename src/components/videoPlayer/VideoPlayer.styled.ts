import styled from "styled-components";
import { themes } from "../../themes";

export const VideoPlayerContainer = styled.div`
	position: absolute;
	top: 15%;
	width: 90%;
	max-width: auto;
`;

export const Video = styled.video`
	width: 100%;
	height: auto;
`;

export const OverlayText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${themes.light.background};
	font-size: 1.6em;
	text-shadow: 1px 1px 2px ${themes.light.text};

	@media (max-width: 768px) {
		font-size: 1em;
	}

	@media (max-width: 480px) {
		font-size: 0.75em;
	}
`;

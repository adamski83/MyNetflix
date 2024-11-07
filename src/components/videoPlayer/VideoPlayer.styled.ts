import styled from "styled-components";

import { themes } from "../../themes";

export const VideoPlayerContainer = styled.div`
	display: flex;
	justify-content: center; /* Wyśrodkowanie wertykalne */
	width: 100%;
	margin: 0 auto;

	@media (max-width: 480px) {
		font-size: 0.75em;
	}
`;

export const Video = styled.video`
	width: 80%;
	height: 40vw;
	margin: 0 auto;
`;

export const OverlayText = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${themes.light.background};
	font-size: 1.6em;
	text-shadow: 1px 1px 2px ${themes.light.text};

	@media (max-width: 768px) {
		font-size: 1em;
	}

	@media (max-width: 480px) {
		font-size: 1em;
		top: 20%;
		left: 50%;
	}
`;

export const Paragraph = styled.p`
	text-align: center;
`;

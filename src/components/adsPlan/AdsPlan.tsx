import Chest from "../../assets/Chest.png";
import * as S from "../ImageContainer/ImageContainer.styled";
import { Typography } from "../typography/Typography";
import { Navbar } from "../Navbar/Navbar";
import { StyledButton } from "../Button/Button.styled";
import { DescriptionBox } from "../DescriptionBox/DescriptionBox";

export const AdsPlan = () => {
	return (
		<>
			<Navbar />
			<S.AdsPlanWrapper>
				<S.ImageContainer>
					<S.StyledImage
						src={Chest}
						alt="Placeholder"
					/>
					<Typography
						variant="h3"
						weight={700}
					>
						Unser günstigstes: das Standard-Abo mit Werbung jetzt ausprobieren
					</Typography>
					<StyledButton>Abo fur 4.99 E Starten</StyledButton>
				</S.ImageContainer>
				<S.ImageContainer>
					<DescriptionBox />
				</S.ImageContainer>
			</S.AdsPlanWrapper>
		</>
	);
};

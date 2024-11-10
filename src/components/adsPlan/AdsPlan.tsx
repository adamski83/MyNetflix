import Chest from "../../assets/Chest.png";
import * as S from "../ImageContainer/ImageContainer.styled";
import { Typography } from "../typography/Typography";
import { Navbar } from "../Navbar/Navbar";
import { StyledButton } from "../Button/Button.styled";
import { DescriptionBox } from "../DescriptionBox/DescriptionBox";
import { themes } from "../../themes";
import { Testimonial } from "../Testimonial/Testimonial";
import sword from "../../assets/khanda-solid.svg";
import clock from "../../assets/clock-regular.svg";
import movie from "../../assets/clapperboard-solid.svg";
import devices from "../../assets/house-laptop-solid.svg";
import cloud from "../../assets/cloudflare-brands-solid.svg";

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
						color={themes.light.background}
					>
						Unser günstigstes: das Standard-Abo mit Werbung jetzt ausprobieren
					</Typography>
					<StyledButton>Abo fur 4.99 E Starten</StyledButton>
				</S.ImageContainer>
				<S.ImageContainer>
					<DescriptionBox />
				</S.ImageContainer>
			</S.AdsPlanWrapper>
			<S.AdsPlanWrapper>
				<Testimonial
					icon={sword}
					title="Action ohne Werbeunterbrechung"
					description="Wenige kurze Werbespots – genau so platziert, um wichtige Momente ungestört zu genießen."
				/>
				<Testimonial
					icon={clock}
					title="Nur ein paar Minuten Werbung pro Stunde"
					description="Genug Zeit, um sich zu stretchen oder nochmal in die Chipstüte zu greifen."
				/>
				<Testimonial
					icon={movie}
					title="Höhere Auflösung, niedriger Preis"
					description="60 % günstiger als unser Standard-Abo und trotzdem komplett in Full HD (1080p)."
				/>
				<Testimonial
					icon={devices}
					title="Auf 2 Geräten streamen"
					description="Bis zu 5 Profile pro Haushalt erstellen und auf 2 Geräten gleichzeitig schauen."
				/>
				<Testimonial
					icon={cloud}
					title="Alle Abenteuer auch offline dabei"
					description="Serien und Filme herunterladen und unterwegs anschauen – wo auch immer."
				/>
			</S.AdsPlanWrapper>
		</>
	);
};

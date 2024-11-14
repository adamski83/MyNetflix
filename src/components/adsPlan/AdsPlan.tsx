import Chest from "../../assets/Chest.png";
import movie from "../../assets/clapperboard-solid.svg";
import clock from "../../assets/clock-regular.svg";
import cloud from "../../assets/cloudflare-brands-solid.svg";
import devices from "../../assets/house-laptop-solid.svg";
import sword from "../../assets/khanda-solid.svg";
import { themes } from "../../themes";
import { Accordion } from "../Accordion/Accordion";
import { StyledButton } from "../Button/Button.styled";
import { DescriptionBox } from "../DescriptionBox/DescriptionBox";
import * as S from "../ImageContainer/ImageContainer.styled";
import { Navbar } from "../Navbar/Navbar";
import { Testimonial } from "../Testimonial/Testimonial";
import { Typography } from "../typography/Typography";

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
						variant="h1"
						weight={700}
						color={themes.light.background}
						align="center"
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
				>
					Wenige kurze Werbespots – genau so platziert, um wichtige Momente
					ungestört zu genießen.
				</Testimonial>
				<Testimonial
					icon={clock}
					title="Nur ein paar Minuten Werbung pro Stunde"
				>
					Genug Zeit, um sich zu stretchen oder nochmal in die Chipstüte zu
					greifen.
				</Testimonial>
				<Testimonial
					icon={movie}
					title="Höhere Auflösung, niedriger Preis"
				>
					60 % günstiger als unser Standard-Abo und trotzdem komplett in Full HD
					(1080p).
				</Testimonial>
				<Testimonial
					icon={devices}
					title="Auf 2 Geräten streamen"
				>
					Bis zu 5 Profile pro Haushalt erstellen und auf 2 Geräten gleichzeitig
					schauen.
				</Testimonial>
				<Testimonial
					icon={cloud}
					title="Alle Abenteuer auch offline dabei"
				>
					Serien und Filme herunterladen und unterwegs anschauen – wo auch
					immer.
				</Testimonial>
			</S.AdsPlanWrapper>
			<S.AdsPlanWrapper direction="column">
				<Typography
					variant="h2"
					weight={700}
					color={themes.light.background}
					align="center"
				>
					Das Standard-Abo mit Werbung jetzt ausprobieren
				</Typography>
				<Typography
					variant="h3"
					weight={400}
					color={themes.light.background}
					align="center"
				>
					… und jederzeit ändern oder kündigen.
				</Typography>
				<StyledButton>Abo fur 4.99 E Starten</StyledButton>
				<StyledButton variant="secondary">Alles Abos Vergleichen</StyledButton>
				<Accordion
					title="Wie funktioniert das Standard-Abo mit Werbung?"
					content="Pro Stunde erwarten Sie wenige kurze Werbeunterbrechungen. Werbung wird, wenn möglich, an passenden Stellen in der Handlung gezeigt, um das Zuschauererlebnis nicht zu beeinträchtigen. Die Werbung wird vor und während ausgewählter Serien und Filme eingeblendet. Bei manchen kürzlich veröffentlichten Filmen gibt es Werbung nur vor Beginn des eigentlichen Titels.

Wenn Sie „Pause“ wählen, wird die Anzahl der Werbeunterbrechungen auf dem Fortschrittsbalken angezeigt. Die Anzahl der Werbespots wird zu Beginn der jeweiligen Werbeunterbrechung rechts oben eingeblendet. Sie können Werbung nicht überspringen oder vorspulen."
				/>
				<Accordion
					title="Wird in Kinderprofilen Werbung gezeigt?"
					content="In Kinderprofilen wird keine Werbung gezeigt. Sie können Ihr Konto also weiterhin unbesorgt mit den Kindern in Ihrem Haushalt teilen."
				/>
				<Accordion
					title="Ist mein Gerät kompatibel?"
					content="Einige ältere Geräte und bestimmte Arten von Fernsehgeräten sind nicht mit dem Standard-Abo mit Werbung kompatibel."
				/>
				<Accordion
					title="Wie funktioniert das Standard-Abo mit Werbung?"
					content="Pro Stunde erwarten Sie wenige kurze Werbeunterbrechungen. Werbung wird, wenn möglich, an passenden Stellen in der Handlung gezeigt, um das Zuschauererlebnis nicht zu beeinträchtigen. Die Werbung wird vor und während ausgewählter Serien und Filme eingeblendet. Bei manchen kürzlich veröffentlichten Filmen gibt es Werbung nur vor Beginn des eigentlichen Titels.

Wenn Sie „Pause“ wählen, wird die Anzahl der Werbeunterbrechungen auf dem Fortschrittsbalken angezeigt. Die Anzahl der Werbespots wird zu Beginn der jeweiligen Werbeunterbrechung rechts oben eingeblendet. Sie können Werbung nicht überspringen oder vorspulen."
				/>
				<Accordion
					title="Welche Inhalte kann ich mit disem Abo ansehen ?"
					content="Sie können Tausende von Serien und Filmen streamen und herunterladen sowie unzählige Spiele spielen. Der Großteil der Serien und Filme ist über ein werbefinanziertes Abo verfügbar. Nur eine kleine Anzahl ist aufgrund von Lizenzbedingungen nicht enthalten. Diese Titel werden mit einem Schloss-Symbol angezeigt."
				/>
				<Accordion
					title="Wer kann mit dem Standard-Abo mit Werbung Mitglied werden?"
					content="Das Standard-Abo mit Werbung steht Mitgliedern in folgenden Ländern zur Verfügung:
Vereinigte Staaten,
Australien,
Brasilien,
Kanada,
Frankreich,
Deutschland,
Italien,
Japan,
Mexiko,
Südkorea,
Spanien,
Vereinigtes Königreich,
	
Das Standard-Abo mit Werbung ist möglicherweise nicht bei allen externen Rechnungsstellungspartnern und Drittanbietern von Leistungspaketen verfügbar. Bitte informieren Sie sich bei Ihrem Anbieter, ob das Abo verfügbar ist."
				/>
			</S.AdsPlanWrapper>
		</>
	);
};

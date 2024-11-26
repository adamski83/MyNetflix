import { Accordion } from "../components/Accordion/Accordion";
import { Button } from "../components/Button/Button";
import { CarouselComponent } from "../components/Carousel/Carousel";
import { Convinience } from "../components/Convinience/Convinience";
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
			{/* <CarouselComponent /> */} {/* TODO: Fix this */}
			<Convinience />
			<Wrapper
				direction="column"
				gap="16px"
				padding="16px"
				width="100%"
			>
				<Accordion
					title="Welche inchalte kann ich auf Netflix ansehen?"
					content="Netflix bietet eine große Auswahl an Spielfilmen, Dokumentationen, Serien, Anime, preisgekrönten Netflix Originalen und mehr. Schauen Sie, so viel Sie möchten, so oft Sie möchten. Beginnen Sie Ihre 30 Gratistage, um alle Inhalte auf Netflix sehen zu können. Schauen Sie sich eine kleine"
				/>
				<Accordion
					title="Was ist Netflix?"
					content="Netflix is ein Streaming-Dienst, der eine Vielzahl preisgekrönter Serien, Filme, Anime, Dokumentationen und mehr auf Tausenden mit dem Internet verbundenen Geräten bietet. Sie können unbegrenzt und werbefrei jederzeit und überall Inhalte ansehen – für einen geringen monatlichen Pries. Es gibt immer etwas Neues zu entdecken, und jede Woche kommen neue Serien und Filme hinzu!"
				/>
				<Accordion
					title="Wie viel kostet Netflix?"
					content="Fur einen monatlichen Pries, so günstig wie eine Tüte Popcorn, können Sie unbegrenzt viele Filme und Serien ansehen. Schauen Sie sich Ihr Smartphone, Tablet, Smart-TV, Laptop oder Streaming-Gerät an. Alle ohne Werbung oder Verpflichtungen."
				/>
				<Accordion
					title="Wo kann ich inhalte ansehen?"
					content="Sie koennen Ihre Lieblingsinhalte überall, jederzeit und auf einer unbegrenzten Anzahl von Geräten ansehen. Melden Sie sich mit Ihrem Netflix-Konto an, um sofort Inhalte anzusehen. Überall wo Sie eine Internetverbindung haben. Sie können auch Ihre Lieblingsinhalte herunterladen und überall ohne Internetverbindung ansehen."
				/>
				<Accordion
					title="Wie kann ich kündigen?"
					content="Mit Netflix sind Sie flexibel. Es gibt keine lästigen Verträge oder Verpflichtungen. Sie können Ihr Konto ganz einfach online in nur zwei Klicks kündigen. Es gibt keine Kündigungsgebühren, und Sie können Ihr Konto jederzeit schließen."
				/>
				<Accordion
					title="Ist Netflix gut fur Kindern?"
					content="Der Kids-Bereich von Netflix bietet eine sichere Umgebung fur Kinder"
				/>
			</Wrapper>
		</>
	);
};

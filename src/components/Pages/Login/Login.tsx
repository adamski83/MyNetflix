import NetflixLogo from "../../../assets/Netflix.png";
import { themes } from "../../../themes";
import { Button } from "../../Button/Button";
import { Typography } from "../../typography/Typography";
import * as S from "./Login.styled";

export const Login = () => {
	return (
		<S.Container>
			<S.Container
				align="start"
				padding="5%"
			>
				<S.Logo
					src={NetflixLogo}
					alt="Netflix"
				/>
				<Typography
					variant="h1"
					color={themes.light.background}
				>
					Einloggen
				</Typography>
				<S.Input placeholder="E-Mail-Adresse oder Handy Nummer" />
				<S.Input placeholder="Passwort" />
				<Button isfullWidth>Einloggen</Button>
				<Typography
					color={themes.light.dimGray}
					align="center"
					fullWidth
				>
					ODER
				</Typography>
				<Button
					isfullWidth
					variant="secondary"
				>
					Login-Code verwenden
				</Button>
				<S.LabelWrapper>
					<S.Checkbox type="checkbox" />
					<S.Label>Angemeldet bleiben</S.Label>
				</S.LabelWrapper>
				<Typography
					color={themes.light.background}
					align="left"
					fullWidth
				>
					Neu bei Netflix? Jetzt registrieren
				</Typography>
				<Typography
					color={themes.light.background}
					align="left"
					fullWidth
					variant="caption"
					weight={300}
				>
					Diese Seite ist durch Google reCAPTCHA abgesichert, um
					sicherzustellen, dass Sie kein Bot sind. Weitere Infos.
				</Typography>
			</S.Container>
		</S.Container>
	);
};

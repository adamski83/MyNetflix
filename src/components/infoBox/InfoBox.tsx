import { Link } from "react-router-dom";

import * as S from "./InfoBox.styled";

export const InfoBox = () => {
	return (
		<S.InfoBoxStyledContainer>
			<h3>Der ganze Netflix-Spaß schon ab 4,99 €.</h3>
			<p>Netflix mit ein paar Werbeunterbrechungen zum Sparpreis genießen.</p>
			<S.Button>
				<Link to="/subscription">Weitere Infos</Link>
			</S.Button>
		</S.InfoBoxStyledContainer>
	);
};

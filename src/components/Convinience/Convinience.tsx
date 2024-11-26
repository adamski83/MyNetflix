import Hands from "../../assets/hand_2865958.png";
import HandsSchake from "../../assets/handshake_1132577.png";
import Heart from "../../assets/heart_2437924.png";
import * as S from "./Convinient.styled";

export const Convinience = () => {
	return (
		<S.ConvinientWrapper>
			<S.ConvinientItem>
				Geschichten ganz ihrem Geschmack
				<S.ConvinientIcon src={Heart} />
			</S.ConvinientItem>
			<S.ConvinientItem>
				Kundigung oder Anderung des Abonnements
				<S.ConvinientIcon src={Hands} />
			</S.ConvinientItem>
			<S.ConvinientItem>
				Ein spezielles Angebot fur Studenten
				<S.ConvinientIcon src={HandsSchake} />
			</S.ConvinientItem>
		</S.ConvinientWrapper>
	);
};

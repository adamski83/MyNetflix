import { Button } from "../Button/Button";
import * as S from "./Input.styled";

export const Input = () => {
	return (
		<S.InoputContainer>
			<S.Input
				type="text"
				placeholder="E-Mail-Adresse"
			/>
			<Button
				variant="secondary"
				size="large"
			>
				Loslegen
			</Button>
		</S.InoputContainer>
	);
};

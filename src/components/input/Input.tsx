import * as S from "./Input.styled";

export const Input = () => {
	return (
		<S.InoputContainer>
			<S.Input
				type="text"
				placeholder="E-Mail-Adresse"
			/>
			<S.Button>Loslegen</S.Button>
		</S.InoputContainer>
	);
};

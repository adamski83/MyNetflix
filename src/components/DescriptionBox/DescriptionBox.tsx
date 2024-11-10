import * as S from "./DescriptionBox.styled";
import * as T from "../typography/Typography";

export const DescriptionBox = () => {
	return (
		<S.DescriptionBoxWrapper>
			<S.RowWrapper>
				<T.Typography>Monatlicher Preis</T.Typography>
				<T.Typography>4,99 €</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography>Werbung </T.Typography>
				<T.Typography>Kurz und nahtlos integriert</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography>Auflösung</T.Typography>
				<T.Typography>1080p (Full HD)</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography>
					Anzahl der Geräte, auf denen Ihr Haushalt gleichzeitig schauen kann
				</T.Typography>
				<T.Typography>2</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography>Herunterladen </T.Typography>
				<T.Typography>Inbegriffen</T.Typography>
			</S.RowWrapper>
		</S.DescriptionBoxWrapper>
	);
};

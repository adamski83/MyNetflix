import * as S from "./DescriptionBox.styled";
import * as T from "../typography/Typography";
import { themes } from "../../themes";

export const DescriptionBox = () => {
	return (
		<S.DescriptionBoxWrapper>
			<S.RowWrapper>
				<T.Typography color={themes.light.background}>
					Monatlicher Preis
				</T.Typography>
				<T.Typography color={themes.light.background}>4,99 €</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography color={themes.light.background}>Werbung </T.Typography>
				<T.Typography color={themes.light.background}>
					Kurz und nahtlos integriert
				</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography color={themes.light.background}>Auflösung</T.Typography>
				<T.Typography color={themes.light.background}>
					1080p (Full HD)
				</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography color={themes.light.background}>
					Anzahl der Geräte, auf denen Ihr Haushalt gleichzeitig schauen kann
				</T.Typography>
				<T.Typography color={themes.light.background}>2</T.Typography>
			</S.RowWrapper>
			<S.RowWrapper>
				<T.Typography color={themes.light.background}>
					Herunterladen{" "}
				</T.Typography>
				<T.Typography color={themes.light.background}>Inbegriffen</T.Typography>
			</S.RowWrapper>
		</S.DescriptionBoxWrapper>
	);
};

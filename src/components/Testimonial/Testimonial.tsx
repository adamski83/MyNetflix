import { themes } from "../../themes";
import { Typography } from "../typography/Typography";
import * as S from "./Testimonial.styled";

interface TestimonialProps {
	icon: string;
	title: string;
	description: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<S.TestimonialWrapper>
			<Typography
				variant="h3"
				color={themes.light.background}
				weight={700}
			></Typography>
			<S.TestimonialItem>
				<S.TestimonialIcon src={icon} />
				<Typography
					variant="h5"
					color={themes.light.background}
					weight={700}
					gutterBottom
				>
					{title}
				</Typography>
				<Typography
					variant="h6"
					color={themes.light.background}
					weight={400}
					gutterBottom
				>
					{description}
				</Typography>
			</S.TestimonialItem>
		</S.TestimonialWrapper>
	);
};

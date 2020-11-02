import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

export const Layout = styled.div`
	min-height: 100vh;
	padding: 0 10%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1000px) {
		padding: 0 0;
	}
`;

type TopProps = {
	image: string;
};

export const Top = styled.div<TopProps>`
	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	transition: background-image 600ms linear;

	height: 350px;
`;

export const Animation = styled(ScrollAnimation)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

Animation.defaultProps = {
	animateIn: "fadeIn",
};

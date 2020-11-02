import styled from "styled-components";
import { Colors } from "./Colors";

export const Title = styled.h2`
	width: 100%;
	text-align: center;
	margin-bottom: 24px;
`;

export const BaseContainer = styled.div`
	background-color: ${(props) => props.color || Colors.branco};
	-webkit-box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.05);
	box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	align-self: center;
	justify-self: center;
`;


export const StandardContainer = styled(BaseContainer)`
	width: 80%;
	max-width: 900px;
`;

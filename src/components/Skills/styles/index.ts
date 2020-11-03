import styled from "styled-components";
import { Colors, SkillHoverColors } from "../../../shared/styles/Colors";
import { BaseContainer } from "../../../shared/styles/common";

export const SkillsContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
	width: 100%;
	align-items: center;
`;

export const SkillsContainer = styled.div`
	padding: 24px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 900px;

	
	@media screen and (max-width: 500px) {
		padding: 0px;
	}
`;

type SkillProps = {
	readonly hoverColors?: SkillHoverColors;
};

export const Skill = styled(BaseContainer)<SkillProps>`
	margin: 12px;
	display: flex;
	flex-direction: column;
	align-self: stretch;
	justify-content: center;
	align-items: center;
	width: 160px;
	height: 160px;
	cursor: default;
	padding: 16px 0;

	@media screen and (max-width: 500px) {
		width: 120px;
		height: 120px;
	}

	& svg {
		margin: 0 32px 16px 32px;

		width: 4rem;
		height: auto;
	}

	& p {
		font-size: 14px;
	}

	&:hover {
		& p {
			color: ${(props) => props.hoverColors?.text || props.hoverColors?.icon || Colors.preto};
			font-weight: 700;
			letter-spacing: 1px;

			transition: color 400ms linear, letter-spacing 300ms linear;
		}

		& svg {
			color: ${(props) => props.hoverColors?.icon || Colors.laranja2};
			transform: scale(1.3);

			transition: all 400ms linear;
		}

		background-color: ${(props) => props.hoverColors?.bg || Colors.branco};

		transition: background-color 800ms linear;
	}
`;

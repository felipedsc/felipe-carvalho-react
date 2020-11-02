import { VerticalTimeline } from "react-vertical-timeline-component";
import styled from "styled-components";

export const TimelineContent = styled.div`
	margin-bottom: 40px;
`;

export const List = styled.ul`
	list-style-type: none;
	position: relative;
	padding: 10px 17px;
	line-height: 20px;
	font-size: 14px;

	& li {
		text-align: initial;
	}

	& li::before {
		content: "■";
		position: relative;
		right: 10px;
		top: -2px;
		font-size: 10px;
	}
`;

export const EmpresaIcon = styled.img`
	width: 100%;
	height: auto;
	border-radius: 50%;
	background-color: white;
`;

export const CustomVerticalTimeline = styled(VerticalTimeline)`
	max-width: 100%;

	&.vertical-timeline::before {
		background-color: #f2f2f2;
	}

	&.vertical-timeline.vertical-timeline--two-columns {
		width: 100% !important;
	}

	& .timeline-date {
		color: #2d4159;
		opacity: 1 !important;
	}

	& .vertical-timeline-element-icon {
		-webkit-box-shadow: 0 0 0 4px #fff, 0 3px 0 4px rgba(0, 0, 0, 0.05);
		box-shadow: 0 0 0 4px #fff, 0 3px 0 4px rgba(0, 0, 0, 0.05);
	}

	& .vertical-timeline-element-content {
		border-radius: 10px;

		-webkit-box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.05);
		box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.05);

		text-align: justify;
	}

	& .vertical-timeline-element-icon {
		box-shadow: 0 0 0 4px #fff, 0 3px 4px 4px #f2f2f2;
	}

	@media screen and (max-width: 800px) {
		max-width: 90%;
	}
`;

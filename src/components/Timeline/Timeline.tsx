import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import athenas from "../../images/athenas.jpg";
import infosis from "../../images/infosis.png";
import itix from "../../images/itix.png";
import vixteam from "../../images/vixteam.png";
import { Colors } from "../../shared/styles/Colors";
import { Title } from "../../shared/styles/common";
import * as S from "./styles";

const ARROW_COLOR = Colors.laranja2;
const BACKGROUND_COLOR = Colors.branco;
const TEXT_COLOR = Colors.azul;

export const Timeline = () => {
	return (
		<S.TimelineContent>
			<Title>Experiência</Title>
			<S.CustomVerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: BACKGROUND_COLOR, color: TEXT_COLOR }}
					contentArrowStyle={{ borderRight: `7px solid  ${ARROW_COLOR}` }}
					date="09/2017 - presente"
					dateClassName="timeline-date"
					icon={<S.EmpresaIcon src={itix} />}
				>
					<h3 className="vertical-timeline-element-title">Desenvolvedor Pleno - Sênior</h3>
					<h4 className="vertical-timeline-element-subtitle">ITIX - Vitória, ES</h4>
					<p>Atuação em diversos projetos da fábrica de software, onde as seguintes competências foram exercidas:</p>

					<S.List>
						<li>.NET Core e AngularJS</li>
						<li>.NET Core e Angular; comunicação em inglês</li>
						<li>Mentoria de Angular para empresa parceira</li>
						<li>.NET Core, React e React Native; liderança de equipe</li>
					</S.List>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="11/2016 - 09/2017"
					dateClassName="timeline-date"
					contentStyle={{ background: BACKGROUND_COLOR, color: TEXT_COLOR }}
					contentArrowStyle={{ borderRight: `7px solid  ${ARROW_COLOR}` }}
					icon={<S.EmpresaIcon src={athenas} />}
				>
					<h3 className="vertical-timeline-element-title">Desenvolvedor Pleno</h3>
					<h4 className="vertical-timeline-element-subtitle">Athenas3000 - Vitória, ES</h4>
					<p>Desenvolvimento de produto utilizando .NET Core e Ext.NET.</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="02/2015 - 11/2016"
					dateClassName="timeline-date"
					contentStyle={{ background: BACKGROUND_COLOR, color: TEXT_COLOR }}
					contentArrowStyle={{ borderRight: `7px solid  ${ARROW_COLOR}` }}
					icon={<S.EmpresaIcon src={vixteam} />}
				>
					<h3 className="vertical-timeline-element-title">Desenvolvedor Júnior - Pleno</h3>
					<h4 className="vertical-timeline-element-subtitle">Vixteam - Vitória, ES</h4>
					<p>Atuação na sustentação de projetos da Petrobras, majoritariamente utilizando .NET com WebForms.</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="08/2012 - 07/2014"
					dateClassName="timeline-date"
					contentStyle={{ background: BACKGROUND_COLOR, color: TEXT_COLOR }}
					contentArrowStyle={{ borderRight: `7px solid  ${ARROW_COLOR}` }}
					icon={<S.EmpresaIcon src={infosis} />}
				>
					<h3 className="vertical-timeline-element-title">Estagiário</h3>
					<h4 className="vertical-timeline-element-subtitle">Infosis - Vitória, ES</h4>
					<p>Treinamento e atuação em projetos .NET e ExtJS.</p>
				</VerticalTimelineElement>
			</S.CustomVerticalTimeline>
		</S.TimelineContent>
	);
};

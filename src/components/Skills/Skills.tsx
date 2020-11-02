import React from "react";
import { FaAngular, FaComments } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { SiDotNet, SiJavascript, SiMicrosoftsqlserver, SiReact, SiTypescript } from "react-icons/si";
import { Colors } from "../../shared/styles/Colors";
import { Title } from "../../shared/styles/common";
import * as S from "./styles";

export const Skills = () => {
	return (
		<S.SkillsContent>
			<Title>Principais competências</Title>

			<S.SkillsContainer>
				<S.Skill hoverColors={Colors.skills.dotnet}>
					<SiDotNet />
					<p>C#</p>
				</S.Skill>

				<S.Skill hoverColors={Colors.skills.react}>
					<SiReact />
					<p>ReactJS</p>
					<p>React Native</p>
				</S.Skill>

				<S.Skill hoverColors={Colors.skills.javascript}>
					<SiJavascript />
					<p>JavaScript</p>
				</S.Skill>

				<S.Skill hoverColors={Colors.skills.typescript}>
					<SiTypescript />
					<p>TypeScript</p>
				</S.Skill>

				<S.Skill hoverColors={Colors.skills.angular}>
					<FaAngular />
					<p>Angular</p>
				</S.Skill>

				<S.Skill hoverColors={Colors.skills.mssql}>
					<SiMicrosoftsqlserver />
					<p>MSSQL Server</p>
				</S.Skill>

				<S.Skill hoverColors={Colors.skills.ingles}>
					<FaComments />
					<p>Inglês avançado</p>
				</S.Skill>

				<S.Skill>
					<RiTeamLine />
					<p>Liderança</p>
				</S.Skill>
			</S.SkillsContainer>
		</S.SkillsContent>
	);
};

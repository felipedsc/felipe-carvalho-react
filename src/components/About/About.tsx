import React from "react";
import { Colors } from "../../shared/styles/Colors";
import { Title } from "../../shared/styles/common";
import { calculateYears } from "../../shared/styles/utils";
import * as S from "./styles";

export const About = () => {
	return (
		<S.AboutContent>
			<Title>Quem sou eu?</Title>
			<S.DescriptionContainer color={Colors.branco}>
				<p>
					<S.Hello>Olá!</S.Hello> Me chamo <S.TextHighlight color={Colors.laranja2}>Felipe</S.TextHighlight> e sou desenvolvedor de software com{" "}
					{calculateYears(new Date(2012, 6, 1))} anos de experiência.
				</p>
				<p>
					Atualmente presto serviço para a <S.TextHighlight>ITIX</S.TextHighlight>, onde já participei de alguns projetos e, no momento, sou encarregado de
					liderar uma equipe e desenvolver apps utilizando <S.TextHighlight>React Native</S.TextHighlight>, SPAs com <S.TextHighlight>ReactJS</S.TextHighlight>,
					além de construir o backend das aplicações sob a plataforma <S.TextHighlight>.NET Core</S.TextHighlight>.
				</p>
			</S.DescriptionContainer>
		</S.AboutContent>
	);
};

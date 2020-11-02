import React from "react";
import { FaBirthdayCake, FaDev, FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import profile from "../../images/profile.png";
import { Colors } from "../../shared/styles/Colors";
import { calculateYears } from "../../shared/styles/utils";
import * as S from "./styles";

export const Card = () => {
	return (
		<>
			<S.SmallScreenCardPhoto >
				<img src={profile} alt="Este sou eu" />
			</S.SmallScreenCardPhoto>
			<S.CardContainer color={Colors.branco}>
				<S.CardPhotoContainer>
					<S.CardPhoto src={profile} />
					<S.CardPhotoFooter color={Colors.cinza3} />
				</S.CardPhotoContainer>

				<S.CardBody>
					<S.CardContent>
						<S.CardTitle>
							<div>
								<h1>
									FELIPE CARVALHO <span>@felipedsc</span>
								</h1>
								<h2>Desenvolvedor Full Stack</h2>
							</div>
						</S.CardTitle>

						<div className="hr" />

						<ul>
							<li>
								<FaMapMarkerAlt /> Vila Velha, ES
							</li>
							<li>
								<FaBirthdayCake /> {calculateYears(new Date(1991, 10, 11))} anos
							</li>
							<li>
								<FaEnvelope /> contato@felipecarvalho.net
							</li>

							<li>
								<a href="https://www.linkedin.com/in/felipedsc/" target="_blank" rel="noreferrer noopener">
									<FaLinkedinIn /> @felipedsc
								</a>
							</li>
						</ul>
					</S.CardContent>
					<S.CardFooter color={Colors.cinza3}>
						<a href="https://dev.to/felipedsc" target="_blank" rel="noreferrer noopener">
							<FaDev />
						</a>
						<a href="http://github.com/felipedsc" target="_blank" rel="noreferrer noopener">
							<FaGithub />
						</a>
						<a href="https://www.linkedin.com/in/felipedsc/" target="_blank" rel="noreferrer noopener">
							<FaLinkedinIn />
						</a>
					</S.CardFooter>
				</S.CardBody>
			</S.CardContainer>
		</>
	);
};

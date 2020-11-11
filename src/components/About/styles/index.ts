import styled from "styled-components";
import { Colors } from "../../../shared/styles/Colors";
import { StandardContainer } from "../../../shared/styles/common";

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const DescriptionContainer = styled(StandardContainer)`
  padding: 50px;
  display: block;
  text-align: justify;

  & p:first-child {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 750px) {
    padding: 20px;
  }
`;

export const Hello = styled.span`
  font-weight: 700;
`;

export const TextHighlight = styled.span`
  color: ${(props) => props.color || Colors.preto};
  font-weight: 700;
`;

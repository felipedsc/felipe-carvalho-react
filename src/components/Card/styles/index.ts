import styled from "styled-components";
import { Colors } from "../../../shared/styles/Colors";
import { StandardContainer } from "../../../shared/styles/common";

export const CardContainer = styled(StandardContainer)`
  min-height: 291px;
  position: relative;
  top: -100px;
  margin-bottom: -50px;
`;

export const CardPhotoContainer = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${Colors.cinza2};
  background: -moz-linear-gradient(
    90deg,
    ${Colors.cinza2} 0%,
    ${Colors.cinza2_1} 50%,
    ${Colors.cinza2} 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    ${Colors.cinza2} 0%,
    ${Colors.cinza2_1} 50%,
    ${Colors.cinza2} 100%
  );
  background: linear-gradient(
    90deg,
    ${Colors.cinza2} 0%,
    ${Colors.cinza2_1} 50%,
    ${Colors.cinza2} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f7fff6",endColorstr="#f7fff6",GradientType=1);

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: flex-end;
  & * {
    word-wrap: break-word;
  }
`;

export const CardPhoto = styled.img`
  width: 260px;
  position: absolute;
`;

export const SmallScreenCardPhoto = styled.div`
  & img {
    width: 150px;
    height: 150px;
  }

  width: 100vw;
  height: 150px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  right: -50%;

  @media screen and (min-width: 750px) {
    display: none;
  }

  &.appear {
    top: 180px;
    transition: top 6s cubic-bezier(0.08, 0.92, 0.98, -0.67);
  }

  &.hide {
    top: 300px;
    transition: top 400ms linear;
  }

  &.stand {
    top: 180px;
  }
`;

export const SmallCardPhoto = styled.img`
  width: 60px;
  height: 60px;
`;

export const CardPhotoFooter = styled.div`
  background-color: ${(props) => props.color};
  color: ${Colors.cinza1};
  width: 100%;
  height: 40px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  & h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${Colors.laranja2};

    & span {
      color: #dedede;
      font-size: 12px;
      font-weight: 600;

      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }

  & h2 {
    font-size: 16px;
    font-weight: 600;
  }

  & .hr {
    margin: 16px 20px;
    border-bottom: 1px solid #dedede;
  }

  & ul {
    list-style-type: none;
    font-size: 14px;
    font-weight: 500;

    line-height: 32px;

    & li,
    a {
      display: flex;

      & svg {
        align-self: center;
        font-weight: 700;
        font-size: 18px;
        margin-right: 8px;
      }
    }

    & a {
      text-decoration: none;

      transition: all 300ms linear;

      &:visited {
        color: ${Colors.cinza3};
      }

      &:hover {
        color: ${Colors.preto};
        transform: scale(1.2);
      }

      &:active {
        color: ${Colors.laranja2};
      }
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  color: ${Colors.cinza1};
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: flex-end;

  & a {
    height: 100%;
    width: 50px;
    color: ${Colors.cinza1};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms linear;

    & svg {
      font-size: 24px;

      transition: all 300ms linear;
    }

    &:hover {
      background-color: ${Colors.cinza3_1};

      & svg {
        transform: scale(1.3);
      }
    }

    &:active {
      color: ${Colors.azul};
    }
  }
`;

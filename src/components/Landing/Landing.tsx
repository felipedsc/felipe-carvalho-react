import React, { useState } from "react";
import background1 from "../../images/top/1.jpg";
import background2 from "../../images/top/2.jpg";
import background3 from "../../images/top/3.jpg";
import background4 from "../../images/top/4.jpg";
import { Colors } from "../../shared/styles/Colors";
import { About } from "../About/About";
import { Card } from "../Card/Card";
import { Skills } from "../Skills/Skills";
import { Timeline } from "../Timeline/Timeline";
import * as S from "./styles";

const images = [background1, background2, background3, background4];

function getRandomImageIndex(currentIndex: number) {
  let randomImageIndex = currentIndex;

  do {
    randomImageIndex = Math.floor(Math.random() * images.length);
  } while (randomImageIndex === currentIndex);

  return randomImageIndex;
}

let topImageChangeTimeout: number;

export const Landing = () => {
  const [topImageIndex, setTopImageIndex] = useState(getRandomImageIndex(5));

  return (
    <S.Layout>
      {images.map((image, imageIndex) => (
        <S.Top
          key={imageIndex}
          color={Colors.cinza2}
          image={image}
          style={{
            display: topImageIndex === imageIndex ? "" : "none",
          }}
          onClick={() => {
            if (topImageChangeTimeout) clearTimeout(topImageChangeTimeout);

            topImageChangeTimeout = setTimeout(() => {
              setTopImageIndex((currentIndex) =>
                getRandomImageIndex(currentIndex)
              );
            }, 300);
          }}
        />
      ))}

      <Card />

      <S.Animation>
        <About />
      </S.Animation>

      <S.Animation>
        <Skills />
      </S.Animation>

      <Timeline />
    </S.Layout>
  );
};

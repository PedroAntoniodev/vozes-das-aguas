import styled from 'styled-components';

import { Colors } from '../../styles/';

import ImgHero from '/images/pesca.webp';
import { animatedText } from '../../styles/TextAnimated';

export const HeroSection = styled.section`
  width: 100%;
  height: 50vh;
  background-image: url(${ImgHero});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  ${animatedText};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 64px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const TitleH2 = styled.h2`
  ${animatedText};
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

import { css } from 'styled-components';
import ImgAnimated from '../assets/images/fundo_animado.jpg';

export const animatedText = css`
  background-image: url(${ImgAnimated});
  background-size: cover;
  background-clip: text;
  color: transparent;
  animation: animate 18s linear infinite;

  @keyframes animate {
    to {
      background-position-x: -500px;
    }
  }
`;

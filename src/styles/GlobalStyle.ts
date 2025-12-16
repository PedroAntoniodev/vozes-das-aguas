import { createGlobalStyle } from 'styled-components';

import { Colors } from './Colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Afacad", sans-serif;
  }

  body {
      bakground-color: ${Colors.white};
  }
  `;

import styled from 'styled-components';

import { Colors } from './Colors';

export const SectionTitle = styled.h2`
  font-size: 38px;
  color: ${Colors.darkBlue};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

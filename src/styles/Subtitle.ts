import styled from 'styled-components';
import { Colors } from './Colors';

export const Subtitle = styled.h3`
  font-size: 28px;
  margin-top: 32px;
  color: ${Colors.blue};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

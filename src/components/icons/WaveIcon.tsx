import styled from 'styled-components';
import { PiWaves } from 'react-icons/pi';
import { Colors } from '../../styles/';

export const WaveIcon = styled(PiWaves)`
  font-size: 30px;
  color: ${Colors.blue};
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

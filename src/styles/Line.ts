import styled from 'styled-components';

import { Colors } from './Colors';

export const Line = styled.hr`
  border: none;
  border-top: 1px solid ${Colors.gray};
  width: 50%;
  margin: 16px 0;
  opacity: 0.9;
`;

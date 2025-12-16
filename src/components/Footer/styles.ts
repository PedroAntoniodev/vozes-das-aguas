import styled from 'styled-components';
import { Colors } from '../../styles/';

export const Footer = styled.footer`
  padding: 32px 0;
  text-align: center;
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};

  p {
    margin-top: 32px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    p {
      margin-top: 24px;
      font-size: 12px;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const ImgLogo = styled.img`
  max-width: 100%;
  height: 60px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 16px;

  a {
    color: ${Colors.white};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 8px;
  }
`;

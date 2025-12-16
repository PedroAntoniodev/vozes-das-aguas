import styled from 'styled-components';
import { Colors } from '../../styles/';

export const SocialSection = styled.section`
  width: 100%;
  padding: 32px 0;
  text-align: center;
  background-color: ${Colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 32px;
  a {
    color: ${Colors.blue};
    font-size: 32px;
    transition: color 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    &:hover {
      color: ${Colors.darkBlue};
      transform: scale(1.5);
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 24px;
    }
    gap: 16px;
  }
`;

export const VideoContainer = styled.div`
  margin-top: 32px;
  width: 800px;
  aspect-ratio: 16/9;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

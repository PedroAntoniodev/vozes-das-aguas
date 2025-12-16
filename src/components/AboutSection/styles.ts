import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  padding: 80px 0;
  margin: 80px auto;
  text-align: center;
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export const ContainerText = styled.div`
  padding: 0 32px;
`;

export const ImgLogoCpp = styled.img`
  max-width: 100%;
  margin-top: 64px;
  height: 30vh;

  @media (max-width: 768px) {
    height: 10vh;
  }

  @media (max-width: 1024px) {
    height: 20vh;
  }
`;

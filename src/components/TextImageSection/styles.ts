import styled from 'styled-components';

export const TextImageSection = styled.section`
  width: 100%;
  padding: 32px 0;
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 8px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: 8px;
    padding: 8px 0;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    li {
      font-size: 16px;
      white-space: normal;
    }
  }
`;

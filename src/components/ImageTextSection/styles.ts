import styled from 'styled-components';

export const ImageTextSection = styled.section`
  width: 100%;
  padding: 32px 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  text-align: center;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 0 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0 16px;
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  list-style: none;

  li {
    gap: 8px;
    display: flex;
    margin-bottom: 8px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    li {
      font-size: 16px;
    }
  }
`;

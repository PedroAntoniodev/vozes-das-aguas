import styled from 'styled-components';
import { Colors } from '../../styles/';

export const EducationMaterialsSection = styled.section`
  width: 100%;
  margin-top: 120px;
  padding: 32px 0;
  text-align: center;
`;

export const EducationMaterialsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #090808ff;
  border-radius: 8px;
  background: linear-gradient(180deg, ${Colors.blue} 0%, ${Colors.gray} 100%);
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardButton = styled.a`
  margin-top: 8px;
  padding: 8px 16px;
  background-color: ${Colors.blue};
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CardTitle = styled.h3`
  margin-top: 16px;
  font-size: 22px;
  color: ${Colors.darkBlue};
`;

export const CardDescription = styled.p`
  margin-top: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: ${Colors.black};
`;

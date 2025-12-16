import { Container, Paragraph, SectionTitle } from '../../styles';
import * as S from './styles';

const ProjectSection = () => {
  return (
    <S.ProjectSection>
      <Container>
        <SectionTitle>Sobre o projeto</SectionTitle>
        <Paragraph>
          O Projeto Vozes das Águas atua no fortalecimento dos direitos, da
          organização e da resiliência climática das comunidades pesqueiras
          artesanais do Sul do Brasil, especialmente no território do Complexo
          Lagunar do Sul de Santa Catarina — Laguna, Imbituba, Imaruí, Jaguaruna
          e Pescaria Brava. Este território será trabalhado como um “laboratório
          de soluções”, onde serão testadas metodologias de fortalecimento da
          resiliência climática, da proteção social e do trabalho digno. Os
          aprendizados serão sistematizados para replicação em outros
          territórios do Sul do Brasil e em nível nacional, ampliando o impacto
          do projeto. O projeto é realizado pelo CPP Regional Sul, com apoio da
          Fundação Fundo Brasil de Direitos Humanos, no âmbito do edital
          Trabalhadores/as Informais e/ou Precarizados - Raízes e Labora.
        </Paragraph>
      </Container>
    </S.ProjectSection>
  );
};

export default ProjectSection;

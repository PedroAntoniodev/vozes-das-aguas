import * as S from './styles';
import { ImageSection, Subtitle, Paragraph, Container } from '../../styles';

import Img from '../../assets/images/imagem2.jpg';
import { WaveIcon } from '../icons';

const TextImageSection = () => {
  return (
    <S.TextImageSection>
      <Container>
        <S.SectionContent>
          <ImageSection src={Img} alt="Imagem de uma trovoada" />
          <S.TextContainer>
            <Subtitle>Objetivos Específicos</Subtitle>
            <S.List>
              <li>
                <WaveIcon />
                Desenvolver um laboratório territorial de soluções climáticas no
                Complexo Lagunar.
              </li>
              <li>
                <WaveIcon /> Realizar oficinas sobre adaptação climática,
                proteção UV e impactos dos microplásticos.
              </li>
              <li>
                <WaveIcon />
                Produzir conteúdos audiovisuais (vídeos e podcasts) sobre clima,
                trabalho e direitos.
              </li>
              <li>
                <WaveIcon />
                Fortalecer a participação das comunidades em espaços decisórios
                e nas agendas da transição justa.
              </li>
              <li>
                <WaveIcon /> Elaborar uma Carta de Demandas com foco em
                políticas públicas, incluindo o seguro-desemprego climático.
              </li>
              <li>
                <WaveIcon /> Sistematizar aprendizados replicáveis para outros
                territórios do Sul e do Brasil.
              </li>
            </S.List>
            <Subtitle>Território Piloto</Subtitle>
            <Paragraph>
              Complexo Lagunar do Sul de Santa Catarina (Laguna, Imbituba,
              Imaruí, Jaguaruna, Pescaria Brava) e outras regiões pertinentes,
              tais como: Garopaba, etc.
            </Paragraph>
            <Paragraph>
              O projeto tem abrangência no SUL DO BRASIL (SC, RS e PR), com
              possibilidade de replicação em outras regiões do país.
            </Paragraph>
          </S.TextContainer>
        </S.SectionContent>
      </Container>
    </S.TextImageSection>
  );
};

export default TextImageSection;

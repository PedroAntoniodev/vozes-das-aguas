import { Container, ImageSection, Paragraph, Subtitle } from '../../styles';
import * as S from './styles';

import { WaveIcon } from '../icons/WaveIcon';
import Img from '../../assets/images/imagemHero.jpg';

const ImageTextSection = () => {
  return (
    <S.ImageTextSection>
      <Container>
        <S.Content>
          <ImageSection src={Img} alt="Imagem de uma trovoada" />
          <S.TextContainer>
            <Subtitle>Por que o projeto é também sobre clima?</Subtitle>
            <Paragraph>
              A Região Sul do Brasil, onde está localizado o Complexo Lagunar,
              vêm sendo fortemente impactados por eventos climáticos extremos,
              tais como:
            </Paragraph>
            <S.ListContainer>
              <S.List>
                <li>
                  <WaveIcon /> Tempestades.
                </li>
                <li>
                  <WaveIcon />
                  Temperaturas altas.
                </li>
                <li>
                  <WaveIcon />
                  Temperaturas baixas.
                </li>
              </S.List>
              <S.List>
                <li>
                  <WaveIcon /> Estiagens prolongadas.
                </li>
                <li>
                  <WaveIcon />
                  Aumento de temperatura.
                </li>
                <li>
                  <WaveIcon />
                  Exposição extrema à radiação UV.
                </li>
              </S.List>
            </S.ListContainer>
            <Subtitle>Por que o projeto é também sobre clima?</Subtitle>
            <S.ListContainer>
              <S.List>
                <li>
                  <WaveIcon /> Trabalho na pesca.
                </li>
                <li>
                  <WaveIcon />
                  Renda das famílias.
                </li>
              </S.List>
              <S.List>
                <li>
                  <WaveIcon /> Segurança no território.
                </li>
                <li>
                  <WaveIcon />
                  Saúde das comunidades.
                </li>
              </S.List>
            </S.ListContainer>
            <Paragraph>
              O projeto enfrenta essa realidade com ações de adaptação
              climática, justiça climática, proteção social e trabalho digno,
              além de apoiar a participação das comunidades nas agendas
              climáticas locais, regionais e nacionais.
            </Paragraph>
          </S.TextContainer>
        </S.Content>
      </Container>
    </S.ImageTextSection>
  );
};

export default ImageTextSection;

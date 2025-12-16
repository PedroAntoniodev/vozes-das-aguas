import { Container } from '../../styles';

import * as S from './styles';

const Hero = () => {
  return (
    <S.HeroSection>
      <Container>
        <S.HeroContent>
          <S.Title>Vozes das Águas</S.Title>
          <S.TitleH2>
            Resiliência Climática, Trabalho Digno e Proteção Social para as
            Comunidades Pesqueiras do Sul do Brasil
          </S.TitleH2>
        </S.HeroContent>
      </Container>
    </S.HeroSection>
  );
};

export default Hero;

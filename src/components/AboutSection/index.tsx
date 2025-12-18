import { Container, Paragraph, SectionTitle, Subtitle } from '../../styles';
import * as S from './styles';

import LogoCpp from '/images/logo_cpp.webp';

const AboutSection = () => {
  return (
    <S.AboutSection>
      <Container>
        <SectionTitle>Quem somos - CPP Regional Sul</SectionTitle>
        <S.SectionContent>
          <S.ContainerText>
            <Subtitle>
              O Conselho Pastoral dos Pescadores Regional Sul (CPP Sul)
            </Subtitle>
            <Paragraph>
              é uma organização de base vinculada ao CPP Nacional, com atuação
              voltada à promoção e defesa dos direitos das comunidades
              pesqueiras artesanais do Sul do Brasil — Santa Catarina, Rio
              Grande do Sul e Paraná. Com caráter pastoral, popular e
              socioambiental, o CPP Sul atua na defesa dos direitos humanos,
              territoriais, ambientais, trabalhistas e culturais dos povos das
              águas, fortalecendo seu protagonismo político, social e cultural.
            </Paragraph>
          </S.ContainerText>
          <S.ContainerText>
            <Subtitle>Nossa missão</Subtitle>
            <Paragraph>
              é valorizar os saberes tradicionais, proteger os territórios
              pesqueiros e garantir que pescadores e pescadoras artesanais
              tenham trabalho digno, proteção social, segurança no território e
              reconhecimento nas políticas públicas. Atuamos com formações,
              organização comunitária, incidência política e articulações em
              rede O CPP Sul também trabalha de forma ativa na agenda climática,
              combatendo o racismo ambiental, denunciando violações e
              construindo estratégias de justiça climática e transição justa.
              Fazemos parte de redes regionais e nacionais comprometidas com os
              povos tradicionais e com a defesa do meio ambiente.
            </Paragraph>
          </S.ContainerText>
        </S.SectionContent>
        <S.ImgLogoCpp src={LogoCpp} alt="Logo do CPP" />
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;

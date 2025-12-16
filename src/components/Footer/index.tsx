import CustomLink from '../../utils/CustomLink';

import { Container, Line } from '../../styles';
import * as S from './styles';

import LogoCpp from '../../assets/images/logo_cpp_footer.png';
import LogoLabora from '../../assets/images/logo_fundo_brasil_footer.png';

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterContainer>
          <div>
            <a href="https://www.cppnacional.org.br" target="_blank">
              <S.ImgLogo src={LogoCpp} alt="Logo CPP" />
            </a>
          </div>
          <div>
            <a href="https://www.fundobrasil.org.br" target="_blank">
              <S.ImgLogo src={LogoLabora} alt="Logo Labora" />
            </a>
          </div>
        </S.FooterContainer>
        <Line style={{ width: '100%' }} />
        <ul>
          <S.ListItems>
            <CustomLink to="/">Sobre o Projeto</CustomLink>
          </S.ListItems>
          <S.ListItems>
            <CustomLink to="/quemsomos">Quem Somos</CustomLink>
          </S.ListItems>
          <S.ListItems>
            <CustomLink to="/materiaseducativos">
              Materiais Educativos
            </CustomLink>
          </S.ListItems>
        </ul>
        <p>
          © 2025 - Site e projeto desenvolvido pelo CPP Regional Sul com apoio
          da Fundação Fundo Brasil de Direitos Humanos. Projeto financiado pelo
          edital Trabalhadores/as Informais e/ou Precarizados - Raízes e Labora{' '}
        </p>
      </Container>
    </S.Footer>
  );
};

export default Footer;

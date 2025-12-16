import { useState } from 'react';

import CustomLink from '../../utils/CustomLink';

import { Container } from '../../styles';
import * as S from './styles';

import ImgLogo from '../../assets/images/logo_projeto.png';

type Props = {
  scrolled: boolean;
};

const Header = ({ scrolled }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.HeaderContainer $scrolled={scrolled} $menuOpen={menuOpen}>
      <Container>
        <S.HeaderContent>
          <S.Logo src={ImgLogo} alt="Logo" />
          <S.HamburguerMenu
            $menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </S.HamburguerMenu>
          <S.NavLinks $menuOpen={menuOpen}>
            <S.NavList>
              <li>
                <CustomLink to="/">Sobre o Projeto</CustomLink>
              </li>
              <li>
                <CustomLink to="/materiaseducativos">
                  Materiais Educativos
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/quemsomos">Quem Somos</CustomLink>
              </li>
            </S.NavList>
          </S.NavLinks>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;

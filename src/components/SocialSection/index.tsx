import ReactPlayer from 'react-player';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

import * as S from './styles';
import { Container, Line, Paragraph, SectionTitle } from '../../styles';

const SocialSection = () => {
  return (
    <S.SocialSection>
      <Container>
        <S.Content>
          <SectionTitle>
            Acompanhe o nosso PODCAST - Ep. 01: Pescadores em risco
          </SectionTitle>
          <S.VideoContainer>
            <ReactPlayer
              src="https://www.youtube.com/embed/J_28sCIqyiI?si=Uh4L2tVekll_e85a"
              controls={true}
              width={'100%'}
              height={'100%'}
            />
          </S.VideoContainer>
          <Paragraph>Siga-nos nas redes sociais</Paragraph>
          <Line />
          <S.SocialLinks>
            <S.SocialIcons>
              <a
                href="https://www.facebook.com/cppnacional"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/cpp_sul/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@ConselhoPastoralRegionalSul"
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </S.SocialIcons>
          </S.SocialLinks>
        </S.Content>
      </Container>
    </S.SocialSection>
  );
};

export default SocialSection;

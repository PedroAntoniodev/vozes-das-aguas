import { Container, SectionTitle } from '../../styles';
import * as S from './styles';

import ImgCartilhaPesca from '../../assets/images/cartilha_pesca.jpg';
import ImgDiagnosticoCosteiro from '../../assets/images/diagnostico_costeiro.jpg';
import ImgDiagnosticoDaPesca from '../../assets/images/pesca_artesanal_santamarta.jpg';
import ImgCapaLivro from '../../assets/images/capa_livro.png';
import ImgPescaArtesanal from '../../assets/images/pesca_artesanal_sc.jpg';
import ImgRelatorioCpp from '../../assets/images/relatorio_cpp.jpg';

const EducationMaterialsSection = () => {
  return (
    <S.EducationMaterialsSection>
      <Container>
        <SectionTitle>Materiais educativos</SectionTitle>
        <S.EducationMaterialsContent>
          <S.Card>
            <S.CardImage
              src={ImgCartilhaPesca}
              alt="Material educativo cartilha da pesca"
            />
            <S.CardTitle>Pesca Artesanal</S.CardTitle>
            <S.CardDescription>
              Cartilha da pesca artesal na apa da baleia franca
            </S.CardDescription>
            <S.CardButton href="/pdfs/cartilha_pesca.pdf" download>
              Baixe o material completo em PDF
            </S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImage
              src={ImgDiagnosticoCosteiro}
              alt="Material educativo diagnostico costeiro"
            />
            <S.CardTitle>Diagnóstico Marinho-Costeiro</S.CardTitle>
            <S.CardDescription>
              1º Diagnóstico Brasileiro Marinho-Costeiro sobre Biodiversidade e
              Serviços Ecossistêmicos
            </S.CardDescription>
            <S.CardButton
              href="/pdfs/diagnostico_marinho_costeiro.pdf"
              download
            >
              Baixe o material completo em PDF
            </S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImage
              src={ImgDiagnosticoDaPesca}
              alt="Material educativo Diagnòstico da pesca artesanal nas comunidades do complexo lagunar
              Santa Marta/Camacho "
            />
            <S.CardTitle>Diagnòstico da pesca artesanal</S.CardTitle>
            <S.CardDescription>
              Diagnòstico da pesca artesanal nas comunidades do complexo lagunar
              Santa Marta/Camacho
            </S.CardDescription>
            <S.CardButton href="/pdfs/diagnostico_pesca.pdf" download>
              Baixe o material completo em PDF
            </S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImage
              src={ImgCapaLivro}
              alt="Material educativo livro Conservação da Biodiversidade e modos de vida"
            />
            <S.CardTitle>
              Livro: Conservação da Biodiversidade e modos de vida
            </S.CardTitle>
            <S.CardDescription>
              Conservação da biodiversidade e modos de vida sustentáveis nas
              lagoas do sul do Brasil 2020, organizada por Gabriela
              Coelho-de-Souza e outros pesquisadores
            </S.CardDescription>
            <S.CardButton
              href="/pdfs/livro_conservacao_modos_vida.pdf"
              download
            >
              Baixe o material completo em PDF
            </S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImage
              src={ImgPescaArtesanal}
              alt="Material educativo pesca artesanal em desenvolvimento"
            />
            <S.CardTitle>Pesca Artesanal em desenvolvimento</S.CardTitle>
            <S.CardDescription>
              A pesca artesanal frente às instituições sociais e modernas e os
              desafios do desenvolvimento territorial
            </S.CardDescription>
            <S.CardButton
              href="/pdfs/pesca_artesanal_desenvolvimento.pdf"
              download
            >
              Baixe o material completo em PDF
            </S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImage
              src={ImgRelatorioCpp}
              alt="Material educativo relatório de conflitos CPP"
            />
            <S.CardTitle>Relatório de conflitos CPP - 2024</S.CardTitle>
            <S.CardDescription>
              Conflitos socioambientais e violações de direitos humanos em
              comunidades tradicionais pesqueiras no Brasil
            </S.CardDescription>
            <S.CardButton href="/pdfs/relatorio_conflitos_cpp.pdf" download>
              Baixe o material completo em PDF
            </S.CardButton>
          </S.Card>
        </S.EducationMaterialsContent>
      </Container>
    </S.EducationMaterialsSection>
  );
};

export default EducationMaterialsSection;

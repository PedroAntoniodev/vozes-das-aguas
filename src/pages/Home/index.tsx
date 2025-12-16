import { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ImageTextSection from '../../components/ImageTextSection';
import ProjectSection from '../../components/ProjectSection';
import SocialSection from '../../components/SocialSection';
import TextImageSection from '../../components/TextImageSection';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 88);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <>
      <Header scrolled={scrolled} />
      <Hero />
      <ProjectSection />
      <ImageTextSection />
      <TextImageSection />
      <SocialSection />
      <Footer />
    </>
  );
};

export default HomePage;

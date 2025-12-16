import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import EducationMaterialsPage from './pages/EducationMaterials';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quemsomos" element={<AboutPage />} />
      <Route path="/materiaseducativos" element={<EducationMaterialsPage />} />
    </Routes>
  );
};

export default PageRoutes;

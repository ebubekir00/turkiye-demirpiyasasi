import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PriceIndexPage from './pages/PriceIndexPage';
import RegionalPricePage from './pages/RegionalPricePage';
import MarketAnalysisPage from './pages/MarketAnalysisPage';
import RequestFormPage from './pages/RequestFormPage';
import MissionVisionPage from './pages/MissionVisionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="demir-fiyat-endeksi" element={<PriceIndexPage />} />
        <Route path="bolgesel-fiyat-arsivi" element={<RegionalPricePage />} />
        <Route path="gunluk-piyasa-analizi" element={<MarketAnalysisPage />} />
        <Route path="talep-formu" element={<RequestFormPage />} />
        <Route path="misyon-vizyon" element={<MissionVisionPage />} />
        <Route path="gizlilik-politikasi" element={<PrivacyPolicyPage />} />
        <Route path="kullanim-kosullari" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
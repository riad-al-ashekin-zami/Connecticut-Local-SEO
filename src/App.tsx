import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { SeoServices } from './pages/SeoServices';
import { Pricing } from './pages/Pricing';
import { SeoConsultant } from './pages/SeoConsultant';
import { Contact } from './pages/Contact';
import { Danbury } from './pages/locations/Danbury';
import { Wallingford } from './pages/locations/Wallingford';
import { NewHaven } from './pages/locations/NewHaven';
import { Waterford } from './pages/locations/Waterford';
import { FreeAudit } from './pages/FreeAudit';
import { ThankYou } from './pages/ThankYou';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="seo-services-connecticut" element={<SeoServices />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="seo-consultant-connecticut" element={<SeoConsultant />} />
            <Route path="contact" element={<Contact />} />
            
            <Route path="free-seo-audit" element={<FreeAudit />} />
            <Route path="thank-you" element={<ThankYou />} />

            {/* Locations */}
            <Route path="local-seo-danbury-ct" element={<Danbury />} />
            <Route path="seo-wallingford-ct" element={<Wallingford />} />
            <Route path="seo-new-haven-ct" element={<NewHaven />} />
            <Route path="local-seo-waterford-ct" element={<Waterford />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

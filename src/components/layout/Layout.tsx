import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { DevToolkitModal } from '../DevToolkitModal';
import { TECHNICAL_JSON_LD } from '../../data/content';

export function Layout() {
  const [isDevToolkitOpen, setIsDevToolkitOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openAudit = () => navigate('/free-seo-audit');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Dynamically inject the technical JSON-LD schema into head for live DOM inspection
  useEffect(() => {
    const existingScript = document.getElementById('technical-json-ld');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'technical-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(TECHNICAL_JSON_LD);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col">
      <Navbar
        onOpenAudit={openAudit}
        onOpenDevToolkit={() => setIsDevToolkitOpen(true)}
      />

      <main className="flex-grow">
        <Outlet context={{ openAudit }} />
      </main>

      <Footer
        onOpenDevToolkit={() => setIsDevToolkitOpen(true)}
        onOpenAudit={openAudit}
      />

      <DevToolkitModal
        isOpen={isDevToolkitOpen}
        onClose={() => setIsDevToolkitOpen(false)}
      />
    </div>
  );
}

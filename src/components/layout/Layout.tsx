import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { AuditModal } from '../AuditModal';
import { DevToolkitModal } from '../DevToolkitModal';
import { TECHNICAL_JSON_LD } from '../../data/content';

export function Layout() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isDevToolkitOpen, setIsDevToolkitOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-orange-600 selection:text-white flex flex-col">
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenDevToolkit={() => setIsDevToolkitOpen(true)}
      />

      <main className="flex-grow">
        <Outlet context={{ openAudit: () => setIsAuditModalOpen(true) }} />
      </main>

      <Footer
        onOpenDevToolkit={() => setIsDevToolkitOpen(true)}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <DevToolkitModal
        isOpen={isDevToolkitOpen}
        onClose={() => setIsDevToolkitOpen(false)}
      />
    </div>
  );
}

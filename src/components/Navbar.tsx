import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { BUSINESS_ENTITY } from '../data/content';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenDevToolkit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 text-slate-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-10 h-10 rounded-sm bg-orange-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-950/50 group-hover:bg-orange-500 transition-colors shrink-0">
              CT
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white group-hover:text-orange-400 transition-colors uppercase">
                {BUSINESS_ENTITY.targetDomain.toUpperCase()}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">
                {BUSINESS_ENTITY.brandName}
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation: Services, Pricing, Contact */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-bold uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-400 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Conversion CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenAudit}
              id="nav-audit-button"
              className="bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-black text-xs sm:text-sm tracking-tight rounded-sm px-6 py-3 uppercase shadow-lg shadow-orange-950/60 transition cursor-pointer flex items-center gap-2 group"
            >
              <span>Claim Free CT Local Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-sm text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-sm text-base font-bold uppercase tracking-wide text-slate-200 hover:text-orange-400 hover:bg-slate-900 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-900">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-xs tracking-tight rounded-sm py-3.5 uppercase shadow-lg shadow-orange-950/60 transition flex items-center justify-center gap-2"
            >
              <span>Claim Free CT Local Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


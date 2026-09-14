import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESS_ENTITY } from '../data/content';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenDevToolkit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'SEO Services', href: '/seo-services-connecticut/' },
    { name: 'SEO Consultant', href: '/seo-consultant-connecticut/' },
    { name: 'Pricing', href: '/pricing/' },
    { name: 'Contact', href: '/contact/' },
  ];

  const locationLinks = [
    { name: 'Danbury, CT', href: '/local-seo-danbury-ct/' },
    { name: 'Wallingford, CT', href: '/seo-wallingford-ct/' },
    { name: 'New Haven, CT', href: '/seo-new-haven-ct/' },
    { name: 'Waterford, CT', href: '/local-seo-waterford-ct/' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-blue-600 border-b border-blue-500/50 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-10 h-10 rounded-sm bg-orange-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-500/30 group-hover:bg-orange-500 transition-colors shrink-0">
              CT
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white group-hover:text-orange-500 transition-colors uppercase">
                {BUSINESS_ENTITY.targetDomain.toUpperCase()}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200 font-bold mt-1">
                {BUSINESS_ENTITY.brandName}
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 text-xs xl:text-sm font-bold uppercase tracking-wider text-white">
            {navLinks.map((link) => {
              if (link.name === 'Contact') return null; // We will render Contact at the end
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`hover:text-orange-500 transition-colors py-2 ${location.pathname === link.href ? 'text-orange-300' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Locations Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className={`flex items-center gap-1 hover:text-orange-500 transition-colors ${location.pathname.includes('-ct') ? 'text-orange-300' : ''}`}>
                LOCATIONS <ChevronDown className="w-4 h-4" />
              </button>
              
              {locationsOpen && (
                <div className="absolute top-full left-0 w-48 bg-slate-50 border border-slate-200 rounded-sm shadow-xl py-2 z-50">
                  {locationLinks.map((loc) => (
                    <Link
                      key={loc.name}
                      to={loc.href}
                      className="block px-4 py-2 text-slate-800 hover:bg-slate-100 hover:text-orange-500 transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact/"
              className={`hover:text-orange-500 transition-colors py-2 ${location.pathname === '/contact/' ? 'text-orange-300' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary Conversion CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenAudit}
              id="nav-audit-button"
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-xs sm:text-sm tracking-tight rounded-sm px-6 py-3 uppercase shadow-lg shadow-orange-500/30 transition cursor-pointer flex items-center gap-2 group shrink-0"
            >
              <span>Free Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-sm text-white hover:text-slate-900 hover:bg-slate-50 border border-slate-200 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wide text-slate-800 hover:text-orange-500 hover:bg-slate-50 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2.5">
              <span className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-2 block">LOCATIONS</span>
              <div className="flex flex-col ml-4 border-l border-slate-200 space-y-1">
                {locationLinks.map((loc) => (
                  <Link
                    key={loc.name}
                    to={loc.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wide text-slate-800 hover:text-orange-500 hover:bg-slate-50 transition"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xs tracking-tight rounded-sm py-3.5 uppercase shadow-lg shadow-orange-500/30 transition flex items-center justify-center gap-2"
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


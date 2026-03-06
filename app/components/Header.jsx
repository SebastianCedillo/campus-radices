'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#espacios',  label: 'Espacios' },
  { href: '#planes',    label: 'Planes' },
  { href: '#contacto',  label: 'Contacto' },
];

export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-radices-darker w-full ${
        scrolled ? 'shadow-2xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '80px' }}>

          {/* LOGO */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo size={44} />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-white/75 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/593962788765"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-radices-light text-white font-semibold text-sm rounded-full hover:bg-radices-mid transition-all duration-300 hover:shadow-lg hover:shadow-radices-light/30"
            >
              <MessageCircle size={14} />
              Emergencia 24/7
            </a>
          </div>

          {/* HAMBURGUESA MOBILE */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* MENÚ MOBILE */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="border-t border-white/10 pt-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-sm font-body text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <a
                href="https://wa.me/593962788765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-radices-light text-white font-semibold text-sm rounded-full hover:bg-radices-mid transition-colors"
              >
                <MessageCircle size={14} />
                Emergencia 24/7
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

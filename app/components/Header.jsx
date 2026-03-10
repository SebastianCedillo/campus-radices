'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#espacios',  label: 'Espacios memoriales' },
  { href: '#planes',    label: 'Planes de previsión' },
  { href: '#servicios', label: 'Servicios complementarios' },
  { href: '#contacto',  label: 'Contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
        setIsOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-[#EDE5DE] w-full transition-transform duration-300"
        style={{ height: '96px', transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">

          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo size={84} />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-body text-radices-darker/70 hover:text-radices-mid transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-radices-darker rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] bg-radices-darker rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] bg-radices-darker rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>

        </div>
      </header>

      <div
        className={`md:hidden fixed left-0 right-0 z-40 bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ top: '96px', transform: hidden ? 'translateY(-100%)' : 'translateY(0)', visibility: hidden ? 'hidden' : 'visible' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#EDE5DE] pt-4 pb-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-sm font-body text-radices-darker/70 hover:text-radices-mid hover:bg-radices-gray rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

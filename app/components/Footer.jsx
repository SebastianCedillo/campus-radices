'use client';

import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { href: '#nosotros',  label: 'Acerca de Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#espacios',  label: 'Espacios Memoriales' },
  { href: '#planes',    label: 'Planes de Previsión' },
  { href: '#contacto',  label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-radices-darker text-white">

      {/* CUERPO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* MARCA */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <Logo size={48} />
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              Servicios funerarios integrales, dignos y planificados para las familias
              de Esmeraldas y la región.
            </p>
          </div>

          {/* ENLACES RÁPIDOS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 font-body text-sm hover:text-radices-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
              Horarios
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={16} className="text-radices-light flex-shrink-0 mt-0.5" />
              <div className="text-sm font-body text-white/65 leading-relaxed">
                <p className="font-semibold text-white/80">Ventas</p>
                <p>Lunes a Domingo</p>
                <p>08:00 – 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-radices-light flex-shrink-0 mt-0.5" />
              <div className="text-sm font-body text-white/65">
                <p className="font-semibold text-white/80">Emergencias</p>
                <p>Disponible 24/7</p>
              </div>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+593962788765"
                className="flex items-center gap-3 group"
              >
                <Phone size={15} className="text-radices-light flex-shrink-0" />
                <span className="text-white/65 font-body text-sm group-hover:text-radices-light transition-colors">
                  +593 96 278 8765
                </span>
              </a>
              <a
                href="https://wa.me/593962788765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-radices-light flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-white/65 font-body text-sm group-hover:text-radices-light transition-colors">
                  WhatsApp
                </span>
              </a>
              <a
                href="mailto:ventas@campusradices.com"
                className="flex items-center gap-3 group"
              >
                <Mail size={15} className="text-radices-light flex-shrink-0" />
                <span className="text-white/65 font-body text-sm group-hover:text-radices-light transition-colors break-all">
                  ventas@campusradices.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            {/* Redes */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/campusradices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-radices-light transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/campusradices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-radices-light transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/campusradices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-radices-light transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.8 1.52V6.75a4.85 4.85 0 01-1.03-.06z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white/40 font-body text-sm text-center">
              © 2026 Campus Radices.
              <span className="mx-2">·</span>
              <span className="italic">La paz también se planifica.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

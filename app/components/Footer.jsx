'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#espacios',  label: 'Espacios memoriales' },
  { href: '#planes',    label: 'Planes de previsión' },
  { href: '#servicios', label: 'Servicios complementarios' },
  { href: '#contacto',  label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-radices-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* MARCA */}
          <div className="md:col-span-1">
            <p className="text-radices-light font-display text-xl font-bold mb-3">Campus Radices</p>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
              Campus Radices es un espacio memorial orientado a la planificación familiar, donde la tranquilidad y la memoria se preservan con respeto y dignidad.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/campusradices" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-radices-light/30 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
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

          {/* HORARIOS Y UBICACIÓN */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
              Horarios
            </h4>
            <div className="flex items-start gap-3 mb-6">
              <Clock size={16} className="text-radices-light flex-shrink-0 mt-0.5" />
              <div className="text-sm font-body text-white/65 leading-relaxed">
                <p className="font-semibold text-white/80">Ventas</p>
                <p>Lunes a domingo</p>
                <p>08:00 – 18:00</p>
              </div>
            </div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
              Ubicación
            </h4>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-radices-light flex-shrink-0 mt-0.5" />
              <div className="text-sm font-body text-white/65 leading-relaxed">
                <p>Barrio Los Guayacanes, Parroquia Tachina</p>
                <p>Cantón y Provincia Esmeraldas</p>
              </div>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <a href="tel:+593962788765" className="flex items-center gap-3 group">
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
              <a href="mailto:familia@campusradices.com" className="flex items-center gap-3 group">
                <Mail size={15} className="text-radices-light flex-shrink-0" />
                <span className="text-white/65 font-body text-sm group-hover:text-radices-light transition-colors break-all">
                  familia@campusradices.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* AVISO LEGAL */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-white/35 font-body text-xs leading-relaxed text-center max-w-3xl mx-auto">
            <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">Aviso importante · </span>
            Campus Radices es un proyecto memorial privado actualmente en fase de planificación y desarrollo. La información presentada tiene carácter referencial dentro del proceso de planificación anticipada.
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 font-body text-sm text-center">
            © 2026 Campus Radices.
            <span className="mx-2">·</span>
            <span className="italic">La paz también se planifica.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

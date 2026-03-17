'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import Logo           from '@/app/components/Logo';
import BrandMessage   from '@/app/components/BrandMessage';
import MissionVision  from '@/app/components/MissionVision';
import CampusPlan    from '@/app/components/CampusPlan';
import MemorialSpaces from '@/app/components/MemorialSpaces';
import Services       from '@/app/components/Services';
import PreventivePlans from '@/app/components/PreventivePlans';
import EmotionalSection from '@/app/components/EmotionalSection';
import TrustSection  from '@/app/components/TrustSection';
import HowWeSupport   from '@/app/components/HowWeSupport';
import FAQ            from '@/app/components/FAQ';
import ContactSection from '@/app/components/ContactSection';
import ClubFundador   from '@/app/components/ClubFundador';
import WhatsAppFloat  from '@/app/components/WhatsAppFloat';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

const whyPlanItems = [
  'Evitar cargas económicas inesperadas',
  'Tomar decisiones con serenidad',
  'Proteger la unión familiar',
  'Garantizar una despedida digna',
  'Asegurar espacios dentro del campus',
  'Preservar la memoria con respeto',
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ═══ HERO ════════════════════════════════════════════════════════════ */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center relative overflow-hidden -mt-24 pt-24"
        style={{
          backgroundColor: '#f0ebe3',
          backgroundImage: 'url(/images/portada.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      >
        {/* Overlay para efecto marca de agua */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(240, 235, 227, 0.62)' }} />

        {/* Contenido centrado */}
        <motion.div
          className="relative z-10 text-center max-w-2xl mx-auto px-6 py-16"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Logo con fondo blanco */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="rounded-full bg-white" style={{ width: 210, height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>
              <Image
                src="/images/logo_campus_radices.png"
                alt="Campus Radices"
                width={204}
                height={204}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mb-4" style={{ lineHeight: 1.4 }}>
            <span className="block text-6xl sm:text-7xl md:text-8xl leading-none mb-0" style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A', fontWeight: 700 }}>La paz</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl whitespace-nowrap" style={{ fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive", color: '#1A1A1A', lineHeight: 1.4 }}>también se planifica</span>
          </motion.h1>

          {/* Línea separadora gris */}
          <motion.div variants={fadeUp} className="flex justify-center mb-5 mt-3">
            <div className="h-[3px] bg-gray-400/70" style={{ width: '60%', maxWidth: '384px' }} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl leading-relaxed mb-10 italic"
            style={{ fontFamily: "'Cormorant', serif", color: '#1A1A1A', fontWeight: 400, fontStyle: 'italic' }}
          >
            Un memorial diseñado para las familias de Esmeraldas
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center px-8">
            <a
              href="https://wa.me/593962788765"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 text-white font-bold text-base sm:text-xl whitespace-nowrap rounded-2xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 inline-block"
              style={{
                backgroundColor: '#4a6428',
                fontFamily: "'Cormorant', serif",
                letterSpacing: '0.02em',
                border: '2px solid #7a9e44',
                boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.6)'
              }}
            >
              Conoce nuestro proyecto
            </a>
          </motion.div>
        </motion.div>

        {/* ChevronDown bounce */}
        <motion.a
          href="#nosotros"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <ChevronDown size={28} className="animate-bounce" />
        </motion.a>
      </section>

      {/* ═══ BRAND MESSAGE ═══════════════════════════════════════════════════ */}
      <BrandMessage />

      {/* ═══ MISIÓN Y VISIÓN ═════════════════════════════════════════════════ */}
      <MissionVision />

      {/* ═══ PLANO MAESTRO ═══════════════════════════════════════════════════ */}
      <CampusPlan />

      {/* ═══ CONFIANZA Y RESPALDO ════════════════════════════════════════════ */}
      <TrustSection />

      {/* ═══ ESPACIOS MEMORIALES ═════════════════════════════════════════════ */}
      <MemorialSpaces />

      {/* ═══ SERVICIOS ═══════════════════════════════════════════════════════ */}
      <Services />

      {/* ═══ PLANES DE PREVISIÓN ═════════════════════════════════════════════ */}
      <PreventivePlans />

      {/* ═══ PREGUNTAS FRECUENTES ════════════════════════════════════════════ */}
      <FAQ />

      {/* ═══ EMOTIONAL SECTION ═══════════════════════════════════════════════ */}
      <EmotionalSection />

      {/* ═══ CÓMO ACOMPAÑAMOS ════════════════════════════════════════════════ */}
      <HowWeSupport />

      {/* ═══ CLUB FUNDADOR ═══════════════════════════════════════════════════ */}

      {/* ═══ CONTACTO ════════════════════════════════════════════════════════ */}
      <ClubFundador />
      <ContactSection />

      {/* ═══ BOTÓN FLOTANTE WHATSAPP ══════════════════════════════════════════ */}
      <WhatsAppFloat />

    </div>
  );
}

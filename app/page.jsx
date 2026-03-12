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
      <section id="inicio" className="bg-radices-cream min-h-screen flex items-center justify-center relative overflow-hidden">

        {/* Fondos radiales sutiles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(198,164,122,0.1)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(166,124,82,0.05)_0%,_transparent_50%)] pointer-events-none" />

        {/* Marca de agua: paisaje */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <Image
            src="/images/hero.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Contenido centrado */}
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto px-6 py-20"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Logo centrado */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <Logo size={160} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mb-6"
          >
            <span className="block text-7xl sm:text-8xl md:text-9xl text-radices-dark leading-none mb-3">La paz</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl text-radices-darker leading-snug">también se planifica</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-radices-light/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-radices-light" />
            <div className="h-px w-16 bg-radices-light/50" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-black font-body italic leading-relaxed mb-10"
          >
            Un espacio memorial pensado para las familias de Esmeraldas
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 items-center">
            <a
              href="https://wa.me/593962788765"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-radices-mid text-white font-semibold rounded-full hover:bg-radices-btn-hover transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Hablar con un asesor
            </a>
          </motion.div>
        </motion.div>

        {/* ChevronDown bounce */}
        <motion.a
          href="#nosotros"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-radices-darker/40 hover:text-radices-darker transition-colors"
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

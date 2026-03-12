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
import ClubFundador    from '@/app/components/ClubFundador';
import ClubFundadorAlt from '@/app/components/ClubFundadorAlt';
import ClubFundadorV3  from '@/app/components/ClubFundadorV3';
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
            className="text-xl sm:text-2xl text-radices-text/80 font-body leading-relaxed mb-10"
          >
            Un espacio memorial pensado para las familias de Esmeraldas.
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

      {/* ═══ ¿POR QUÉ PLANIFICAR? ════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT: imagen familiar */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-2xl overflow-hidden h-80 md:h-[420px] shadow-card-lg order-2 md:order-1"
            >
              <Image
                src="/images/familia_planificacion.png"
                alt="Familia planificando su tranquilidad con anticipación"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-radices-darker/20 to-transparent" />
            </motion.div>

            {/* RIGHT: contenido */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 md:order-2"
            >
              <motion.span variants={fadeUp}
                className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
              >
                Previsión familiar
              </motion.span>
              <motion.h2 variants={fadeUp}
                className="text-4xl md:text-5xl font-display text-radices-darker mb-6 leading-tight"
              >
                ¿Por qué planificar con anticipación?
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mb-6 rounded-full" />
              <motion.p variants={fadeUp} className="text-radices-text font-body text-base leading-relaxed mb-6">
                La planificación anticipada permite a las familias tomar decisiones importantes con tranquilidad y organización. Entre sus principales beneficios se encuentran:
              </motion.p>
              <motion.ul variants={stagger} className="space-y-4 mb-8">
                {whyPlanItems.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="text-radices-light flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-radices-text font-body text-lg leading-snug">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp}
                className="text-lg font-display italic text-radices-dark border-l-4 border-radices-light pl-4"
              >
                "La previsión es una forma responsable de cuidar a quienes amas."
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

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
      <ClubFundador />
      <ClubFundadorAlt />
      <ClubFundadorV3 />

      {/* ═══ CONTACTO ════════════════════════════════════════════════════════ */}
      <ContactSection />

      {/* ═══ BOTÓN FLOTANTE WHATSAPP ══════════════════════════════════════════ */}
      <WhatsAppFloat />

    </div>
  );
}

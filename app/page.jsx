'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import HowWeSupport    from '@/app/components/HowWeSupport';
import Services        from '@/app/components/Services';
import MemorialSpaces  from '@/app/components/MemorialSpaces';
import PreventivePlans from '@/app/components/PreventivePlans';
import ContactSection  from '@/app/components/ContactSection';
import MissionVision   from '@/app/components/MissionVision';
import CorporateValues from '@/app/components/CorporateValues';
import LegalProcedures from '@/app/components/LegalProcedures';
import WhatsAppFloat   from '@/app/components/WhatsAppFloat';

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
  'Evitar decisiones difíciles en momentos de dolor',
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ═══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-radices-cream">

        {/* Textura sutil de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#e8ddd0_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#d4c4b0_0%,_transparent_50%)] pointer-events-none" />

        {/* DOS COLUMNAS */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-28 flex flex-col lg:flex-row items-center gap-12">

          {/* TEXTO — izquierda */}
          <motion.div
            className="w-full lg:w-[40%] shrink-0 text-center lg:text-left"
            variants={stagger} initial="hidden" animate="show"
          >
            <motion.p variants={fadeUp}
              className="text-radices-light text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            >
              Esmeraldas, Ecuador
            </motion.p>

            <motion.h1 variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-display text-radices-darker leading-tight mb-6"
            >
              La Paz También
              <br />
              <span className="text-radices-dark">se planifica.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="h-px w-16 bg-radices-light/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-radices-light" />
              <div className="h-px w-16 bg-radices-light/50" />
            </motion.div>

            <motion.p variants={fadeUp}
              className="text-lg text-radices-text/80 font-body leading-relaxed mb-10"
            >
              Campus Radices es un espacio digno, organizado y verdaderamente humano,
              donde la memoria es honrada con respeto y la previsión permite vivir los
              momentos de despedida con serenidad.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#planes"
                className="px-8 py-4 bg-radices-darker text-white font-semibold rounded-full hover:bg-radices-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Planificar ahora
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 border-2 border-radices-darker/30 text-radices-darker font-semibold rounded-full hover:border-radices-darker hover:bg-radices-darker/5 transition-all duration-300"
              >
                Hablar con un asesor
              </a>
            </motion.div>
          </motion.div>

          {/* PLANO — con zoom interactivo */}
          <motion.div
            className="flex flex-1 items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
              className="relative w-full max-w-[500px] lg:max-w-[720px] rounded-lg overflow-hidden"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(44,31,20,0.18))' }}
            >
              <TransformWrapper
                initialScale={1}
                minScale={0.8}
                maxScale={6}
                centerOnInit
                wheel={{ step: 0.1 }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    {/* Controles */}
                    <div className="absolute top-2 right-2 z-20 flex flex-col gap-1">
                      <button
                        onClick={() => zoomIn()}
                        className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg text-radices-darker font-bold text-lg flex items-center justify-center hover:bg-white shadow-sm transition-colors"
                        aria-label="Acercar"
                      >+</button>
                      <button
                        onClick={() => zoomOut()}
                        className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg text-radices-darker font-bold text-lg flex items-center justify-center hover:bg-white shadow-sm transition-colors"
                        aria-label="Alejar"
                      >−</button>
                      <button
                        onClick={() => resetTransform()}
                        className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg text-radices-darker text-xs flex items-center justify-center hover:bg-white shadow-sm transition-colors"
                        aria-label="Restablecer"
                      >↺</button>
                    </div>
                    <TransformComponent wrapperStyle={{ width: '100%' }} contentStyle={{ width: '100%' }}>
                      <Image
                        src="/images/plano-hd.png"
                        alt="Plano maestro Campus Radices"
                        width={720}
                        height={560}
                        className="w-full rounded-lg"
                        priority
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
              {/* Hint */}
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-radices-darker/50 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 pointer-events-none whitespace-nowrap">
                Pellizca o usa la rueda para hacer zoom
              </p>
            </motion.div>
          </motion.div>

        </div>

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

      {/* ═══ ACERCA DE NOSOTROS ══════════════════════════════════════════════ */}
      <section id="nosotros" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={fadeUp}
              className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
            >
              Nuestra Historia
            </motion.span>
            <motion.h2 variants={fadeUp}
              className="text-4xl md:text-5xl font-display text-radices-darker mb-6 leading-tight"
            >
              Acerca de nosotros
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto mb-8 rounded-full" />
            <motion.p variants={fadeUp}
              className="text-lg md:text-xl text-radices-text font-body leading-relaxed mb-6"
            >
              Campus Radices nace del deseo de ofrecer a las familias de Esmeraldas un espacio
              digno, organizado y verdaderamente humano, donde la memoria sea honrada con
              respeto y donde la planificación permita vivir los momentos de despedida con serenidad.
            </motion.p>
            <motion.p variants={fadeUp}
              className="text-lg text-radices-text font-body leading-relaxed mb-6"
            >
              Creemos firmemente que la paz familiar no debe improvisarse. Por eso nuestro
              principio fundamental es: <em>«La paz también se planifica.»</em>
            </motion.p>
            <motion.p variants={fadeUp}
              className="text-lg text-radices-text font-body leading-relaxed"
            >
              Campus Radices es un proyecto privado de alto valor social orientado a la
              planificación funeraria responsable, la preservación de la memoria familiar y el
              acompañamiento humano, desarrollado bajo una visión ética, organizada y sostenible.
            </motion.p>
            <motion.blockquote variants={fadeUp}
              className="mt-10 text-xl md:text-2xl font-display italic text-radices-dark border-l-4 border-radices-light pl-6 text-left max-w-2xl mx-auto"
            >
              "La planificación funeraria no es pensar en la muerte,
              es proteger a quienes amamos."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* ═══ MISIÓN Y VISIÓN ═════════════════════════════════════════════════ */}
      <MissionVision />

      {/* ═══ VALORES ═════════════════════════════════════════════════════════ */}
      <CorporateValues />

      {/* ═══ ¿POR QUÉ PLANIFICAR? ════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={fadeUp}
                className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
              >
                Previsión funeraria
              </motion.span>
              <motion.h2 variants={fadeUp}
                className="text-4xl md:text-5xl font-display text-radices-darker mb-6 leading-tight"
              >
                Prever es un acto de amor
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mb-8 rounded-full" />
              <motion.div variants={stagger} className="space-y-4 mb-8 text-radices-text font-body text-lg leading-relaxed">
                <motion.p variants={fadeUp}>
                  Muchas familias enfrentan decisiones difíciles en momentos de dolor.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Cuando una pérdida ocurre de manera inesperada, deben tomarse decisiones
                  importantes bajo presión emocional y urgencia.
                </motion.p>
                <motion.p variants={fadeUp}>
                  La planificación funeraria permite cambiar esa realidad. Planificar con
                  anticipación es una forma de proteger a la familia, evitar cargas económicas
                  inesperadas y tomar decisiones con serenidad y claridad.
                </motion.p>
              </motion.div>
              <motion.h3 variants={fadeUp}
                className="text-xl font-display text-radices-darker mb-5"
              >
                ¿Por qué planificar con anticipación?
              </motion.h3>
              <motion.ul variants={stagger} className="space-y-4">
                {whyPlanItems.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="text-radices-light flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-radices-text font-body text-lg leading-snug">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden shadow-card-lg"
            >
              <div className="bg-radices-darker p-10 text-white">
                <p className="text-2xl md:text-3xl font-display leading-snug mb-6">
                  "Dejar todo en orden para cuando ya no estés, puede ser tu mayor acto de amor."
                </p>
                <div className="h-px bg-white/20 mb-6" />
                <p className="font-body text-white/75 leading-relaxed text-lg">
                  Nuestro compromiso es acompañar a cada familia con sensibilidad humana,
                  transparencia y profesionalismo, ofreciendo soluciones que permitan vivir
                  los momentos de despedida con serenidad y unión.
                </p>
              </div>
              <div className="bg-radices-light p-5">
                <p className="text-white font-semibold text-center tracking-wide text-sm">
                  Campus Radices — La paz también se planifica.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ CÓMO ACOMPAÑAMOS ════════════════════════════════════════════════ */}
      <HowWeSupport />

      {/* ═══ ESPACIOS MEMORIALES ═════════════════════════════════════════════ */}
      <MemorialSpaces />

      {/* ═══ SERVICIOS ═══════════════════════════════════════════════════════ */}
      <Services />

      {/* ═══ PLANES DE PREVISIÓN ═════════════════════════════════════════════ */}
      <PreventivePlans />

      {/* ═══ TRÁMITES LEGALES ════════════════════════════════════════════════ */}
      <LegalProcedures />

      {/* ═══ CONTACTO ════════════════════════════════════════════════════════ */}
      <ContactSection />

      {/* ═══ BOTÓN FLOTANTE WHATSAPP ══════════════════════════════════════════ */}
      <WhatsAppFloat />

    </div>
  );
}

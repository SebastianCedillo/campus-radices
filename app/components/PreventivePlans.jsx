'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  'Proteger a los seres queridos',
  'Evitar cargas económicas inesperadas',
  'Organizar decisiones importantes',
  'Planificar con anticipación',
  'Congelar precios',
];

export default function PreventivePlans() {
  return (
    <section id="planes" className="py-24 px-4 bg-radices-cream">
      <div className="max-w-6xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
          >
            Planificación anticipada
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Planes de previsión
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto"
          >
            La planificación anticipada permite asegurar espacios memoriales y organizar cada decisión con tranquilidad, evitando presiones emocionales y económicas en momentos difíciles.
          </motion.p>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* BENEFICIOS */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={fadeUp}
              className="text-2xl md:text-3xl font-display text-radices-darker mb-8 leading-snug"
            >
              Beneficios de planificar hoy
            </motion.h3>
            <motion.ul variants={stagger} className="space-y-5">
              {benefits.map((benefit, idx) => (
                <motion.li key={idx} variants={fadeUp} className="flex items-start gap-4">
                  <CheckCircle2 className="text-radices-light flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-radices-text font-body text-lg leading-snug">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-radices-darker rounded-2xl overflow-hidden shadow-card-lg"
          >
            <div className="p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-display mb-4 leading-snug">
                Planificar hoy es proteger a quienes amas
              </h3>
              <p className="font-body text-white/75 leading-relaxed">
                Un asesor de Campus Radices puede orientarte para elegir la alternativa más adecuada para tu familia.
              </p>
            </div>

            <div className="px-10 pb-10 flex justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-radices-light text-white font-semibold rounded-xl hover:bg-radices-btn-hover transition-all duration-300 hover:shadow-lg"
              >
                Solicitar asesoría
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

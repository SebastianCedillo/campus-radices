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

const pillars = [
  'Diseño arquitectónico moderno',
  'Gestión ambiental responsable',
  'Desarrollo progresivo por etapas',
  'Estructura jurídica y organizativa sólida',
];

export default function TrustSection() {
  return (
    <section className="py-24 px-4 bg-radices-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={fadeUp}
              className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
            >
              Confianza y respaldo
            </motion.span>
            <motion.h2 variants={fadeUp}
              className="text-4xl md:text-5xl font-display text-radices-darker mb-6 leading-tight"
            >
              Un proyecto desarrollado con planificación y responsabilidad
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mb-8 rounded-full" />
            <motion.p variants={fadeUp}
              className="text-lg text-radices-text font-body leading-relaxed"
            >
              Campus Radices es un proyecto memorial privado concebido para ofrecer a las familias de Esmeraldas un espacio digno, organizado y sostenible para preservar la memoria familiar.
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white rounded-2xl p-10 shadow-card-lg"
          >
            <h3 className="text-2xl font-display text-radices-darker mb-2 leading-snug">
              Un campus memorial pensado a largo plazo
            </h3>
            <div className="w-12 h-1 bg-radices-light mb-6 rounded-full" />
            <p className="text-base font-body text-radices-text mb-6 leading-relaxed">
              Su desarrollo contempla:
            </p>
            <ul className="space-y-5">
              {pillars.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-radices-light flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-radices-text font-body text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

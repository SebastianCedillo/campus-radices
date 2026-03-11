'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const steps = [
  { num: '01', label: 'Certificado médico de defunción' },
  { num: '02', label: 'Elección del lugar de velación' },
  { num: '03', label: 'Contratación del servicio funerario' },
  { num: '04', label: 'Velación' },
  { num: '05', label: 'Ceremonia final' },
];

export default function HowWeSupport() {
  return (
    <section className="py-24 px-4 bg-radices-gray">
      <div className="max-w-3xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
          >
            Nuestro proceso
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            ¿Cómo acompañamos tu despedida?
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full" />
        </motion.div>

        {/* PASOS */}
        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Línea vertical */}
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-radices-light/30" />

          <div className="space-y-4">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="flex items-center gap-5"
              >
                <div className="w-11 h-11 rounded-full border-2 border-radices-light bg-white flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-xs font-bold text-radices-light">{step.num}</span>
                </div>
                <div className="flex-1 bg-white rounded-2xl px-6 py-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <span className="font-body text-radices-darker text-base">{step.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-radices-mid text-white font-semibold rounded-full hover:bg-radices-btn-hover transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Contactar un asesor
          </a>
        </motion.div>

      </div>
    </section>
  );
}

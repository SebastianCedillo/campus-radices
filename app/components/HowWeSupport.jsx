'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const steps = [
  { number: '01', title: 'Certificado médico de defunción' },
  { number: '02', title: 'Elección del lugar de velación' },
  { number: '03', title: 'Contratación del servicio funerario' },
  { number: '04', title: 'Velación' },
  { number: '05', title: 'Ceremonia final' },
];

export default function HowWeSupport() {
  return (
    <section className="py-24 px-4 bg-radices-gray">
      <div className="max-w-7xl mx-auto">

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
          className="grid md:grid-cols-5 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-radices-light/40 to-transparent -z-10 translate-x-6" />
              )}
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 bg-radices-darker rounded-full flex items-center justify-center text-white font-display text-sm font-bold shadow-card ring-4 ring-radices-gray">
                  {step.number}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-display text-radices-darker leading-snug">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#contacto"
            className="inline-block px-12 py-5 bg-radices-darker text-white font-semibold text-lg rounded-full hover:bg-radices-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Contactar un asesor
          </a>
        </motion.div>

      </div>
    </section>
  );
}

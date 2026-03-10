'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

const procedures = [
  'Certificado médico de defunción',
  'Inscripción en Registro Civil',
  'Permisos de cremación',
  'Reclamo de montepío',
  'Orientación sobre herencias',
  'Otros trámites necesarios',
];

export default function LegalProcedures() {
  return (
    <section className="py-24 px-4 bg-radices-gray">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
          >
            Gestión legal
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Trámites legales
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body"
          >
            Nuestro equipo especializado te guía en cada trámite legal, permitiéndote
            dedicar tu energía a lo más importante: honrar la memoria de quien amas.
          </motion.p>
        </motion.div>

        <motion.ul
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {procedures.map((item, idx) => (
            <motion.li
              key={idx}
              variants={fadeUp}
              className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-card"
            >
              <CheckCircle2 className="text-radices-light flex-shrink-0" size={22} />
              <span className="font-body text-radices-text text-lg">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="#contacto"
            className="inline-block px-10 py-4 bg-radices-darker text-white font-semibold rounded-full hover:bg-radices-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Agendar asesoría legal gratuita
          </a>
        </motion.div>

      </div>
    </section>
  );
}

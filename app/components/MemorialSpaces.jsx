'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

const spaces = [
  { nombre: 'Bóvedas Radices Altum',     descripcion: 'Bóvedas memoriales.' },
  { nombre: 'Cenizarios Radices Arbor',  descripcion: 'Cenizarios para resguardo de urnas.' },
  { nombre: 'Osarios Radices Altum',     descripcion: 'Osarios memoriales.' },
  { nombre: 'Panteón Familiar Radices',  descripcion: 'Panteones familiares.' },
  { nombre: 'Mausoleo Familiar Radices', descripcion: 'Mausoleos familiares.' },
];

export default function MemorialSpaces() {
  return (
    <section id="espacios" className="py-24 px-4 bg-white">
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
            Descanso eterno
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Espacios memoriales
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            Campus Radices ha sido concebido como un espacio memorial donde las familias pueden preservar la memoria de sus seres queridos con respeto, naturaleza y serenidad.
          </motion.p>
        </motion.div>

        {/* GRID DE ESPACIOS */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {spaces.map((space, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              className="group bg-white border border-radices-gray rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1.5 overflow-hidden flex flex-col"
            >
              {/* PLACEHOLDER */}
              <div className="bg-radices-gray h-36 rounded-xl flex items-center justify-center m-4">
                <Leaf className="text-radices-light" size={32} />
              </div>

              {/* CONTENIDO */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-display text-radices-darker mb-2 leading-snug">
                  {space.nombre}
                </h3>
                <p className="text-radices-text font-body leading-relaxed text-sm flex-1">
                  {space.descripcion}
                </p>
                <div className="mt-5 pt-4 border-t border-radices-gray">
                  <a
                    href="#contacto"
                    className="text-xs font-semibold text-radices-light hover:text-radices-dark transition-colors inline-flex items-center gap-1"
                  >
                    Más información
                    <span className="text-base leading-none">→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

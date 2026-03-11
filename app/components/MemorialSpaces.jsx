'use client';

import { motion } from 'framer-motion';
import { Building2, Wind, Archive, Home, Crown, Landmark } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

const spaces = [
  { nombre: 'Bóvedas Radices Altum',     descripcion: 'Bóvedas memoriales diseñadas para preservar la memoria con dignidad y orden.',                                icon: Building2 },
  { nombre: 'Cenizarios Radices Arbor',  descripcion: 'Espacios destinados al resguardo de urnas funerarias en un entorno natural y sereno.',                       icon: Wind },
  { nombre: 'Osarios Radices Altum',     descripcion: 'Espacios destinados a la preservación organizada de restos memoriales.',                                      icon: Archive },
  { nombre: 'Panteón Familiar Radices',  descripcion: 'Espacios diseñados para la preservación memorial de varios miembros de una misma familia.',                  icon: Home },
  { nombre: 'Mausoleo Familiar Radices',    descripcion: 'Estructuras familiares exclusivas dentro del campus memorial.',                                                                                          icon: Crown },
  { nombre: 'Panteón Monumental Radices',   descripcion: 'Estructuras monumentales subterráneas de mayor capacidad, destinadas a la preservación memorial de varias generaciones familiares.',                icon: Landmark },
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
          {spaces.map((space, idx) => {
            const Icon = space.icon;
            return (
              <motion.article
                key={idx}
                variants={fadeUp}
                className="group bg-white border border-radices-gray rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
              >
                {/* ÍCONO */}
                <div className="flex justify-center pt-10 pb-4">
                  <div className="w-20 h-20 rounded-full bg-radices-gray flex items-center justify-center group-hover:bg-radices-light/15 transition-colors duration-300">
                    <Icon size={36} className="text-radices-dark group-hover:text-radices-light transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* CONTENIDO */}
                <div className="p-6 pt-2 flex flex-col flex-1 text-center">
                  <h3 className="text-lg font-display text-radices-darker mb-2 leading-snug">
                    {space.nombre}
                  </h3>
                  <p className="text-radices-text font-body leading-relaxed text-sm flex-1">
                    {space.descripcion}
                  </p>
                  <div className="mt-5 pt-4 border-t border-radices-gray">
                    <a
                      href="#contacto"
                      className="text-xs font-semibold text-radices-light hover:text-radices-dark transition-colors inline-flex items-center justify-center gap-1"
                    >
                      Más información
                      <span className="text-base leading-none">→</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

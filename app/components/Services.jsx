'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

const services = [
  'Velatio Honoris',
  'Sepultura Pax',
  'Ignus Eternum',
  'Memoria Renovatio',
  'Gestio Legatum',
  'Arreglos Florales',
  'Oratio Pacis',
  'Ritus Memoriae',
  'Flora Sancta',
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-radices-gray">
      <div className="max-w-5xl mx-auto">

        {/* ENCABEZADO */}
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
            Lo que ofrecemos
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Servicios exequiales complementarios
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto"
          >
            El campus contemplará servicios adicionales destinados a acompañar a las familias cuando así lo requieran.
          </motion.p>
        </motion.div>

        {/* LISTA */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-card px-6 py-5 flex items-center justify-between group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="font-display text-radices-darker text-base">{service}</span>
              <a
                href="#contacto"
                className="text-xs font-semibold text-radices-light hover:text-radices-dark transition-colors whitespace-nowrap ml-4"
              >
                Solicitar información →
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

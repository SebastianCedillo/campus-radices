'use client';

import { motion } from 'framer-motion';
import { Moon, Leaf, Flame, RefreshCw, FileText, Flower2, BookOpen, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

const services = [
  { nombre: 'Velatio Honoris',    descripcion: 'Sala ceremonial de velación.',                         icon: Moon },
  { nombre: 'Sepultura Pax',      descripcion: 'Servicio de sepultura memorial.',                      icon: Leaf },
  { nombre: 'Ignus Eternum',      descripcion: 'Servicio de cremación.',                               icon: Flame },
  { nombre: 'Memoria Renovatio',  descripcion: 'Renovación y mantenimiento memorial.',                 icon: RefreshCw },
  { nombre: 'Gestio Legatum',     descripcion: 'Gestión administrativa y acompañamiento familiar.',    icon: FileText },
  { nombre: 'Flora Sancta',       descripcion: 'Arreglos florales memoriales.',                        icon: Flower2 },
  { nombre: 'Oratio Pacis',       descripcion: 'Servicios ceremoniales y religiosos.',                 icon: BookOpen },
  { nombre: 'Ritus Memoriae',     descripcion: 'Ritos conmemorativos y ceremoniales.',                 icon: Star },
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
              className="bg-white rounded-xl shadow-card px-6 py-5 flex flex-col gap-3 group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-radices-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <service.icon className="text-radices-light" size={20} />
              </div>
              <div>
                <span className="font-display text-radices-darker text-base block mb-1">{service.nombre}</span>
                <span className="text-sm text-radices-text/70 font-body">{service.descripcion}</span>
              </div>
              <a
                href="#contacto"
                className="text-xs font-semibold text-radices-light hover:text-radices-dark transition-colors self-start"
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

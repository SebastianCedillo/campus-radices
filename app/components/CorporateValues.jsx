'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Handshake, Lightbulb, Clock, Shield, Leaf } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

const values = [
  { icon: Heart,     nombre: 'Dignidad humana' },
  { icon: Users,     nombre: 'Amor y unión familiar' },
  { icon: Handshake, nombre: 'Respeto y sensibilidad' },
  { icon: Lightbulb, nombre: 'Transparencia' },
  { icon: Clock,     nombre: 'Planificación y previsión' },
  { icon: Shield,    nombre: 'Confianza y acompañamiento' },
  { icon: Leaf,      nombre: 'Responsabilidad social' },
];

export default function CorporateValues() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

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
            Lo que nos guía
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Valores que guían nuestro camino
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 w-32"
            >
              <div className="w-14 h-14 bg-radices-light/15 rounded-full flex items-center justify-center hover:bg-radices-light/30 transition-colors">
                <value.icon className="w-6 h-6 text-radices-light" />
              </div>
              <p className="text-sm font-display text-radices-darker text-center leading-snug">
                {value.nombre}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

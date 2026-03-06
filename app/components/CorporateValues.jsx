'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Handshake, Lightbulb, Clock, Shield, Leaf } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const values = [
  { icon: Heart,     nombre: 'Dignidad Humana',           descripcion: 'Cada vida merece ser honrada con respeto absoluto y cuidado integral.' },
  { icon: Users,     nombre: 'Amor y Unión Familiar',     descripcion: 'Fomentamos la unión y el fortalecimiento de los lazos familiares en momentos difíciles.' },
  { icon: Handshake, nombre: 'Respeto y Sensibilidad',    descripcion: 'Entendemos el dolor y actuamos con empatía y consideración en cada interacción.' },
  { icon: Lightbulb, nombre: 'Transparencia',             descripcion: 'Comunicación clara y honesta en todos nuestros procesos y servicios.' },
  { icon: Clock,     nombre: 'Planificación y Previsión', descripcion: 'Promovemos la planificación anticipada como acto de amor hacia quienes amamos.' },
  { icon: Shield,    nombre: 'Confianza y Acompañamiento',descripcion: 'Somos tu apoyo constante en cada etapa del proceso de despedida.' },
  { icon: Leaf,      nombre: 'Responsabilidad Social',    descripcion: 'Comprometidos con el bienestar colectivo y la sostenibilidad ambiental.' },
];

export default function CorporateValues() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-16"
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
            Valores que guían nuestro proyecto
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            Los principios que guían cada decisión y acción en Campus Radices.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-radices-cream rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 bg-radices-light/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-radices-light/25 transition-colors">
                <value.icon className="w-6 h-6 text-radices-light" />
              </div>
              <h3 className="text-lg font-display text-radices-darker mb-3 leading-snug">
                {value.nombre}
              </h3>
              <p className="text-sm text-radices-text font-body leading-relaxed flex-1">
                {value.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

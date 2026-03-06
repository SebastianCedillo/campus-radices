'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, PhoneCall } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  'Planificar con anticipación y tranquilidad',
  'Congelar precios actuales — sin ajustes futuros',
  'Proteger a tus seres queridos de decisiones difíciles',
  'Evitar cargas económicas inesperadas en momentos de dolor',
];

export default function PreventivePlans() {
  return (
    <section id="planes" className="py-24 px-4 bg-radices-cream">
      <div className="max-w-6xl mx-auto">

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
            Previsión funeraria
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Planes de Previsión Funeraria
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto"
          >
            Campus Radices ofrece planes de previsión que permiten a las familias planificar con
            anticipación y tranquilidad, protegiendo a sus seres queridos ante cualquier eventualidad.
          </motion.p>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* BENEFICIOS */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={fadeUp}
              className="text-2xl md:text-3xl font-display text-radices-darker mb-8 leading-snug"
            >
              Beneficios de planificar hoy
            </motion.h3>
            <motion.ul variants={stagger} className="space-y-5">
              {benefits.map((benefit, idx) => (
                <motion.li key={idx} variants={fadeUp} className="flex items-start gap-4">
                  <CheckCircle2 className="text-radices-light flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-radices-text font-body text-lg leading-snug">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.blockquote
              variants={fadeUp}
              className="mt-10 border-l-4 border-radices-light pl-6"
            >
              <p className="text-xl font-display italic text-radices-dark leading-snug">
                "Planificar hoy es un acto de amor que brinda tranquilidad mañana."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-radices-darker rounded-2xl overflow-hidden shadow-card-lg"
          >
            <div className="p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-display mb-4 leading-snug">
                Elige el Plan Adecuado para Tu Familia
              </h3>
              <p className="font-body text-white/75 leading-relaxed mb-5">
                Un asesor especializado de Campus Radices está disponible para ayudarte a
                elegir el plan que mejor se adapte a las necesidades y valores de tu familia.
                Cada plan es flexible y personalizable.
              </p>
              <p className="font-body text-white/70 leading-relaxed">
                Te guiaremos a través de todas las opciones disponibles para que tomes la
                mejor decisión con toda la información necesaria.
              </p>
            </div>

            <div className="px-10 pb-10 space-y-4">
              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-radices-light text-white font-semibold rounded-xl hover:bg-radices-mid transition-all duration-300 hover:shadow-lg hover:shadow-radices-light/30"
              >
                <PhoneCall size={18} />
                Contactar Asesor Especializado
              </a>
              <p className="text-center text-xs text-white/45 font-body">
                Consulta inicial sin costo · Atención personalizada
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

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
  'Planificar con anticipación',
  'Congelar precios',
  'Organizar decisiones importantes',
  'Proteger a los seres queridos',
  'Evitar cargas económicas inesperadas',
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
            Planes funerarios prepagados
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto mb-3"
          >
            La planificación funeraria es una forma de cuidar a la familia incluso cuando ya no estemos.
          </motion.p>
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto mb-3"
          >
            Tomar decisiones con anticipación permite que los momentos de despedida puedan vivirse
            con serenidad, respeto y unión familiar.
          </motion.p>
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto"
          >
            Campus Radices nace precisamente con ese propósito.
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
                Planificar hoy es proteger a quienes amas
              </h3>
              <p className="font-body text-white/75 leading-relaxed mb-5">
                La planificación funeraria es una forma de cuidar a la familia incluso cuando
                ya no estemos.
              </p>
              <p className="font-body text-white/70 leading-relaxed mb-5">
                Tomar decisiones con anticipación permite que los momentos de despedida puedan
                vivirse con serenidad, respeto y unión familiar.
              </p>
              <p className="font-body text-white/65 leading-relaxed mb-5">
                Campus Radices nace precisamente con ese propósito.
              </p>
              <p className="font-body text-white/65 leading-relaxed">
                Un asesor especializado podrá orientar a cada familia para elegir la alternativa más adecuada.
              </p>
            </div>

            <div className="px-10 pb-10 space-y-4">
              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-radices-light text-white font-semibold rounded-xl hover:bg-radices-mid transition-all duration-300 hover:shadow-lg hover:shadow-radices-light/30"
              >
                <PhoneCall size={18} />
                Contactar asesor especializado
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

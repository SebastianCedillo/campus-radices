'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.2 } },
};

export default function MissionVision() {
  return (
    <section id="nosotros" className="py-24 px-4 bg-radices-gray">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp}
            className="text-2xl md:text-3xl font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
          >
            Quienes somos
          </motion.span>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-radices-darker rounded-2xl p-10 text-white shadow-card-lg"
          >
            <div className="w-12 h-1 bg-radices-light mb-6 rounded-full" />
            <h3 className="text-3xl font-display mb-6">Nuestra misión</h3>
            <p className="font-body text-lg leading-relaxed text-white/85">
              Brindar a las familias de Esmeraldas, un espacio memorial digno y organizado, promoviendo la planificación anticipada como una forma responsable de proteger a quienes amamos y preservar la memoria con respeto.
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="bg-radices-dark rounded-2xl p-10 text-white shadow-card-lg"
          >
            <div className="w-12 h-1 bg-radices-light mb-6 rounded-full" />
            <h3 className="text-3xl font-display mb-6">Nuestra visión</h3>
            <p className="font-body text-lg leading-relaxed text-white/85">
              Convertirnos en el principal campus memorial de la región, reconocido por su enfoque humano, su compromiso con la planificación familiar y su modelo innovador de previsión patrimonial.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

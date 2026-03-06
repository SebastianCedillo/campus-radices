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
    <section className="py-24 px-4 bg-radices-gray">
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
            Quiénes somos
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Misión y Visión
          </motion.h2>
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
            <h3 className="text-3xl font-display mb-6">Nuestra Misión</h3>
            <p className="font-body text-lg leading-relaxed text-white/85 mb-5">
              Brindar a las familias de Esmeraldas y la región una solución funeraria integral,
              digna y planificada, que permita afrontar los procesos de despedida con serenidad,
              organización y respeto, evitando decisiones apresuradas o cargas económicas inesperadas.
            </p>
            <p className="font-body leading-relaxed text-white/70">
              Promovemos la planificación funeraria como una forma consciente de proteger
              a la familia y preservar su tranquilidad.
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
            <h3 className="text-3xl font-display mb-6">Nuestra Visión</h3>
            <p className="font-body text-lg leading-relaxed text-white/85">
              Consolidar a Campus Radices como el campus funerario de referencia en la
              provincia de Esmeraldas, reconocido por su enfoque humano, su visión innovadora
              en planificación funeraria y su contribución al bienestar de las familias.
            </p>
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="font-display text-2xl italic text-radices-light">
                "La paz también se planifica."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

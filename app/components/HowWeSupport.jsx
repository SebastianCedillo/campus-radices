'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const steps = [
  {
    number: '01',
    title: 'Certificado Médico de Defunción',
    description: 'Te guiamos para obtenerlo de manera rápida y sin complicaciones, aliviando parte de la carga en este momento difícil.',
  },
  {
    number: '02',
    title: 'Elección del Lugar de Velación',
    description: 'Te ayudamos a crear un espacio digno que refleje el amor y la historia compartida con tu ser querido.',
  },
  {
    number: '03',
    title: 'Contratación del Servicio Funerario',
    description: 'Nos encargamos de todo lo necesario para la cremación o sepultura, cuidando cada detalle con respeto y dedicación.',
  },
  {
    number: '04',
    title: 'Velación',
    description: 'Un momento para reunirse, compartir recuerdos y sentir el abrazo de quienes te acompañan en esta despedida.',
  },
  {
    number: '05',
    title: 'Ceremonia Final',
    description: 'La sepultura o cremación, realizada con todo el cuidado, la solemnidad y el respeto que este último homenaje merece.',
  },
];

export default function HowWeSupport() {
  return (
    <section className="py-24 px-4 bg-radices-gray">
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
            Nuestro proceso
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            ¿Cómo Acompañamos Tu Despedida?
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            En Campus Radices sabemos que despedir a un ser querido es un acto de amor.
            Te ofrecemos apoyo integral para guiarte y resolver cada detalle con respeto y calidez.
          </motion.p>
        </motion.div>

        {/* PASOS */}
        <motion.div
          className="grid md:grid-cols-5 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className="relative">

              {/* Línea conectora horizontal — solo desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-9 left-1/2 w-full h-px bg-gradient-to-r from-radices-light/40 to-transparent -z-10 translate-x-8" />
              )}

              {/* Número */}
              <div className="flex justify-center mb-6">
                <div className="w-18 h-18 w-[72px] h-[72px] bg-radices-darker rounded-full flex items-center justify-center text-white font-display text-xl font-bold shadow-card-lg ring-4 ring-radices-gray">
                  {step.number}
                </div>
              </div>

              {/* Contenido */}
              <div className="text-center">
                <h3 className="text-base font-display text-radices-darker mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-radices-text font-body leading-relaxed">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-lg text-radices-text font-body mb-6">
            En cada etapa, estamos contigo para brindarte el apoyo necesario.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-radices-darker text-white font-semibold rounded-full hover:bg-radices-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Contactar un Asesor
          </a>
        </motion.div>

      </div>
    </section>
  );
}

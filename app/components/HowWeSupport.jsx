'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Certificado médico de defunción' },
  { number: '02', title: 'Elección del lugar de velación' },
  { number: '03', title: 'Contratación del servicio funerario' },
  { number: '04', title: 'Velación' },
  { number: '05', title: 'Ceremonia final' },
];

export default function HowWeSupport() {
  return (
    <section className="py-24 px-4 bg-radices-darker overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
          >
            Nuestro proceso
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-4xl md:text-5xl font-display text-white mb-4 leading-tight"
          >
            ¿Cómo acompañamos tu despedida?
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0, scaleX: 0 }, show: { opacity: 1, scaleX: 1, transition: { duration: 0.6 } } }}
            className="w-16 h-1 bg-radices-light mx-auto rounded-full"
          />
        </motion.div>

        {/* PASOS — lista vertical con línea lateral */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Línea vertical */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px bg-radices-light/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  show:  { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="flex items-center gap-6 group pl-1"
              >
                {/* Dot en la línea */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-radices-darker border-2 border-radices-light/40 flex items-center justify-center group-hover:border-radices-light group-hover:bg-radices-light transition-all duration-300">
                    <span className="font-display text-xs font-bold text-radices-light group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-radices-light/30 rounded-xl px-6 py-4 transition-all duration-300">
                  <p className="font-display text-white text-lg leading-snug">
                    {step.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#contacto"
            className="inline-block px-12 py-5 bg-radices-light text-white font-semibold text-lg rounded-full hover:bg-radices-mid transition-all duration-300 hover:shadow-xl hover:shadow-radices-light/20 hover:-translate-y-0.5"
          >
            Contactar un asesor
          </a>
        </motion.div>

      </div>
    </section>
  );
}

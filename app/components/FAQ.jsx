'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const faqs = [
  {
    pregunta: '¿Para qué planificar algo que yo no voy a ver?',
    respuesta: 'La planificación memorial no es para quien parte, sino para quienes quedan. Planificar evita que la familia tenga que tomar decisiones difíciles bajo presión emocional y económica.',
  },
  {
    pregunta: '¿La planificación significa que el servicio se utilizará inmediatamente?',
    respuesta: 'No. La planificación anticipada permite reservar espacios dentro del campus para cuando sea necesario.',
  },
  {
    pregunta: '¿Puedo planificar para varios miembros de mi familia?',
    respuesta: 'Sí. Existen opciones de planificación familiar que permiten asegurar espacios para varios integrantes de la familia.',
  },
  {
    pregunta: '¿La planificación memorial tiene beneficios para la familia?',
    respuesta: 'Sí. Planificar permite evitar cargas económicas inesperadas, tomar decisiones con serenidad y garantizar que los deseos familiares se respeten.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">

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
            Resolvemos tus dudas
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Preguntas frecuentes
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full" />
        </motion.div>

        {/* ACORDEÓN */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="border border-radices-gray rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-radices-cream transition-colors duration-200"
              >
                <span className="font-display text-radices-darker text-lg pr-4">{faq.pregunta}</span>
                <ChevronDown
                  size={20}
                  className={`text-radices-light flex-shrink-0 transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="px-6 pb-5 text-radices-text font-body text-base leading-relaxed border-t border-radices-gray pt-4">
                      {faq.respuesta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

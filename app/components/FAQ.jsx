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
    pregunta: '¿Qué significa asegurar un espacio dentro del campus?',
    respuesta: 'Es la certeza de contar con un lugar reservado dentro de un entorno diseñado para la memoria, el respeto y la serenidad. Asegurar este espacio hoy permite que el legado familiar tenga un destino definido, digno y organizado dentro de un campus memorial planificado a largo plazo.',
  },
  {
    pregunta: '¿Planificar con anticipación es una forma de cuidado familiar?',
    respuesta: 'Absolutamente. Planificar es un acto de responsabilidad y amor que protege a la familia, evitando que sus seres queridos deban tomar decisiones importantes en momentos de presión emocional. La previsión permite brindarles claridad, organización y tranquilidad para el futuro.',
  },
  {
    pregunta: '¿Qué valor aporta saber que todo está contemplado?',
    respuesta: 'Aporta una paz invaluable. Cuando los detalles han sido planificados con anticipación, la familia puede enfocarse únicamente en honrar la memoria y acompañarse mutuamente con serenidad, sin preocupaciones adicionales.',
  },
  {
    pregunta: '¿Es necesario pensar constantemente en el futuro para planificar?',
    respuesta: 'No. La previsión memorial es una decisión responsable que se toma una sola vez. Es similar a cualquier planificación patrimonial: se organiza hoy para poder vivir con la tranquilidad de que todo está resuelto para el mañana.',
  },
  {
    pregunta: '¿Cuáles son los beneficios de participar en esta etapa inicial?',
    respuesta: 'Participar en esta fase del proyecto ofrece ventajas que no estarán disponibles en etapas posteriores:',
    subItems: [
      { titulo: 'Valor preferencial', descripcion: 'Permite acceder a un valor significativamente menor al precio que tendrá el campus una vez desarrollado.' },
      { titulo: 'Acceso al Club Fundador', descripcion: 'Las primeras familias podrán formar parte del Club Fundador, con condiciones y distinciones exclusivas reservadas para un número limitado de participantes.' },
      { titulo: 'Facilidad de financiamiento', descripcion: 'La etapa inicial permite estructurar la inversión con mayor flexibilidad, mientras el proyecto avanza hacia su desarrollo y apertura.' },
    ],
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
                    <div className="px-6 pb-5 border-t border-radices-gray pt-4">
                      <p className="text-radices-text font-body text-base leading-relaxed">{faq.respuesta}</p>
                      {faq.subItems && (
                        <ul className="mt-4 space-y-4">
                          {faq.subItems.map((item, i) => (
                            <li key={i}>
                              <p className="font-display text-radices-darker text-base font-semibold mb-1">{item.titulo}</p>
                              <p className="text-radices-text font-body text-base leading-relaxed">{item.descripcion}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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

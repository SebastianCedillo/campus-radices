'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function BrandMessage() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: texto */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4">
              Nuestra razón de ser
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display text-radices-darker mb-6 leading-tight">
              Planificar hoy es brindar tranquilidad mañana
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mb-8 rounded-full" />
            <motion.p variants={fadeUp} className="text-lg text-radices-text font-body leading-relaxed mb-5">
              La planificación memorial permite tomar decisiones con serenidad, proteger a la familia de cargas inesperadas y preservar la memoria con respeto.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-radices-text font-body leading-relaxed mb-5">
              Campus Radices nace con un propósito claro: ofrecer a las familias un espacio digno donde la memoria, la tranquilidad y la previsión puedan organizarse con tiempo.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-radices-text font-body leading-relaxed mb-5">
              Creemos firmemente que la paz familiar no debe improvisarse.
            </motion.p>
            <motion.p variants={fadeUp}
              className="text-xl font-display italic text-radices-dark border-l-4 border-radices-light pl-4"
            >
              Por eso nace nuestro principio fundamental: La paz también se planifica.
            </motion.p>
          </motion.div>
          {/* RIGHT: imagen familiar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-2xl overflow-hidden h-80 md:h-[420px] shadow-card-lg"
          >
            <Image
              src="/images/familia_mensaje.png"
              alt="Familia unida planificando su tranquilidad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-radices-darker/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

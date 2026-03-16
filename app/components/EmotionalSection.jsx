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

export default function EmotionalSection() {
  return (
    <section className="py-24 px-4 bg-radices-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: imagen emocional familiar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto w-full order-2 md:order-1"
          >
            <Image
              src="/images/foto2.webp"
              alt="Familia unida en un momento de serenidad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-radices-darker/20 to-transparent" />
          </motion.div>
          {/* RIGHT: texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2"
          >
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-radices-darker font-body leading-relaxed mb-6">
              Cuando una pérdida ocurre, las familias enfrentan decisiones difíciles bajo presión.
            </motion.p>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-radices-darker font-body leading-relaxed mb-10">
              Planificar con anticipación permite vivir esos momentos con serenidad, respeto y unión.
            </motion.p>
            <motion.blockquote variants={fadeUp} className="border-l-4 border-radices-light pl-6">
              <p className="text-3xl md:text-4xl font-display italic text-radices-darker leading-tight">
                "La paz…<br />también se planifica."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

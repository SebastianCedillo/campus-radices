'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function ClubFundador() {
  return (
    <section className="py-24 px-4 bg-radices-cream">
      <div className="max-w-3xl mx-auto">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-2"
          >
            Acceda al
          </motion.span>

          <motion.h2 variants={fadeUp}
            className="text-5xl md:text-7xl font-display text-radices-darker leading-tight mb-8"
          >
            Club Fundador
          </motion.h2>

          <motion.p variants={fadeUp}
            className="text-lg md:text-xl text-radices-text font-body leading-relaxed mb-5"
          >
            Estamos invitando a las primeras familias a formar parte del Club Fundador de Campus Radices, una etapa inicial que ofrece condiciones preferenciales y beneficios exclusivos de preventa.
          </motion.p>

          <motion.p variants={fadeUp}
            className="text-lg md:text-xl text-radices-text font-body leading-relaxed mb-12"
          >
            Las primeras familias tendrán la oportunidad de asegurar su espacio memorial dentro del campus y participar en el inicio de un proyecto concebido para preservar la memoria con dignidad y planificación.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="https://wa.me/593999482328"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-radices-darker text-white font-semibold tracking-widest uppercase text-sm px-10 py-6 w-full md:w-auto hover:bg-radices-dark transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.57a.75.75 0 00.927.927l5.725-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.355l-.355-.211-3.676.944.963-3.574-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Contactar por WhatsApp
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

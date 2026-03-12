'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function ClubFundadorAlt() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #e8ddd0 0%, #d4c4b0 50%, #c9b89a 100%)' }}
    >
      {/* Watermark fondo */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-[0.07] pointer-events-none select-none">
        <Image
          src="/images/logo-transparente.png"
          alt=""
          width={420}
          height={420}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT: texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={fadeUp}
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: '#8b6535' }}
            >
              Acceda al
            </motion.p>

            <motion.h2 variants={fadeUp}
              className="text-5xl md:text-6xl font-display leading-tight mb-6"
              style={{ color: '#2c1f0e' }}
            >
              Club Fundador
            </motion.h2>

            <motion.div variants={fadeUp}
              className="w-14 h-0.5 mb-6 rounded-full"
              style={{ background: '#8b6535' }}
            />

            <motion.p variants={fadeUp}
              className="text-base md:text-lg font-body leading-relaxed mb-4"
              style={{ color: '#3d2a14' }}
            >
              Estamos invitando a las primeras familias a formar parte del Club Fundador de Campus Radices, una etapa inicial que ofrece condiciones preferenciales y beneficios exclusivos de preventa.
            </motion.p>

            <motion.p variants={fadeUp}
              className="text-base font-body leading-relaxed mb-10"
              style={{ color: '#5a3e20' }}
            >
              Las primeras familias tendrán la oportunidad de asegurar su espacio memorial dentro del campus y participar en el inicio de un proyecto concebido para preservar la memoria con dignidad y planificación.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="https://wa.me/593999482328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold text-sm px-8 py-4 rounded transition-all duration-300 hover:brightness-90"
              style={{ background: '#3d2a14', color: '#e8d5b7' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.57a.75.75 0 00.927.927l5.725-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.355l-.355-.211-3.676.944.963-3.574-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Contactar por WhatsApp
            </motion.a>
          </motion.div>

          {/* RIGHT: medalla en estuche */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            {/* Estuche */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, #2a1a0a 0%, #1a0f05 100%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,100,0.1)',
              }}
            >
              {/* Interior estuche */}
              <div
                className="absolute inset-4 rounded-xl"
                style={{ background: 'linear-gradient(145deg, #1f1208 0%, #0d0804 100%)' }}
              />
              {/* Moneda */}
              <div
                className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center z-10"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #f5e070 0%, #d4a020 45%, #8b6010 80%, #5a3e08 100%)',
                  border: '4px solid #e8c050',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,230,100,0.3)',
                }}
              >
                <div className="absolute inset-2 rounded-full" style={{ border: '1px solid rgba(255,220,80,0.3)' }} />
                <Image
                  src="/images/logo-transparente.png"
                  alt="Campus Radices"
                  width={65}
                  height={65}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1) sepia(1) saturate(0.1)', opacity: 0.85 }}
                />
                <p className="text-[9px] font-semibold tracking-[0.18em] uppercase mt-1" style={{ color: 'rgba(255,240,170,0.8)' }}>
                  Campus Radices
                </p>
                <p className="text-[8px] tracking-[0.12em] uppercase" style={{ color: 'rgba(255,225,130,0.6)' }}>
                  Club Fundador
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Logo pie */}
        <div className="flex justify-center mt-12 opacity-20">
          <Image src="/images/logo-transparente.png" alt="" width={32} height={32} style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}

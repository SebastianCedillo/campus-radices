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

export default function ClubFundador() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2c1f0e 0%, #4a3520 40%, #6b4c2a 100%)' }}
    >
      {/* Watermark fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <Image
          src="/images/logo-transparente.png"
          alt=""
          width={500}
          height={500}
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
            <motion.h2 variants={fadeUp}
              className="text-5xl md:text-6xl font-display leading-tight mb-6"
              style={{ color: '#c9a96e' }}
            >
              Club Fundador
            </motion.h2>

            <motion.p variants={fadeUp}
              className="text-base md:text-lg font-body leading-relaxed mb-4"
              style={{ color: '#e8d5b7' }}
            >
              Estamos invitando a las primeras familias a formar parte del Club Fundador de Campus Radices, una etapa inicial que ofrece condiciones preferenciales y beneficios exclusivos de preventa.
            </motion.p>

            <motion.p variants={fadeUp}
              className="text-base md:text-lg font-body leading-relaxed mb-10"
              style={{ color: '#c9b99a' }}
            >
              Las primeras familias tendrán la oportunidad de asegurar su espacio memorial dentro del campus y participar en el inicio de un proyecto concebido para preservar la memoria con dignidad y planificación.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="https://wa.me/593999482328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold tracking-wide text-sm px-8 py-4 rounded-sm transition-all duration-300 hover:brightness-110"
              style={{ background: '#3d2a14', color: '#e8d5b7', border: '1px solid #7a5c35' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.57a.75.75 0 00.927.927l5.725-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.355l-.355-.211-3.676.944.963-3.574-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Contactar por WhatsApp
            </motion.a>
          </motion.div>

          {/* RIGHT: medalla dorada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            {/* Caja de medalla */}
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Sombra exterior */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{ background: 'radial-gradient(circle, #c9a96e 0%, transparent 70%)' }}
              />
              {/* Medalla */}
              <div
                className="relative w-full h-full rounded-full flex flex-col items-center justify-center shadow-2xl"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #f0d080 0%, #c9a030 40%, #8b6520 80%, #5a3e10 100%)',
                  border: '6px solid #e8c060',
                  boxShadow: '0 0 0 3px #8b6520, 0 20px 60px rgba(0,0,0,0.6)',
                }}
              >
                {/* Anillo interior */}
                <div
                  className="absolute inset-3 rounded-full"
                  style={{ border: '2px solid rgba(255,220,100,0.4)' }}
                />
                {/* Logo */}
                <Image
                  src="/images/logo-transparente.png"
                  alt="Campus Radices"
                  width={90}
                  height={90}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1) sepia(1) saturate(0.2)', opacity: 0.9 }}
                />
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mt-1"
                  style={{ color: 'rgba(255,240,180,0.85)' }}
                >
                  Campus Radices
                </p>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase mt-0.5"
                  style={{ color: 'rgba(255,230,150,0.7)' }}
                >
                  Club Fundador
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Logo pequeño al pie */}
        <div className="flex justify-center mt-12 opacity-30">
          <Image
            src="/images/logo-transparente.png"
            alt=""
            width={36}
            height={36}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </div>
    </section>
  );
}

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

export default function ClubFundadorV3() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #c8b89a 0%, #d4c4a8 40%, #bfaa8a 100%)' }}
    >
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #5a3e20 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={fadeUp}
              className="text-xs font-semibold tracking-[0.28em] uppercase mb-3"
              style={{ color: '#7a5428' }}
            >
              Acceda al
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display leading-tight mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#1e1208',
                textShadow: '1px 2px 4px rgba(0,0,0,0.15)' }}
            >
              Club Fundador
            </motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-0.5 mb-6 rounded-full" style={{ background: '#8b6535' }} />
            <motion.p variants={fadeUp}
              className="text-base md:text-lg font-body leading-relaxed mb-4"
              style={{ color: '#2e1e0a' }}
            >
              Estamos invitando a las primeras familias a formar parte del Club Fundador de Campus Radices, una etapa inicial que ofrece condiciones preferenciales y beneficios exclusivos de preventa.
            </motion.p>
            <motion.p variants={fadeUp}
              className="text-base font-body leading-relaxed mb-10"
              style={{ color: '#4a3018' }}
            >
              Las primeras familias tendrán la oportunidad de asegurar su espacio memorial dentro del campus y participar en el inicio de un proyecto concebido para preservar la memoria con dignidad y planificación.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="https://wa.me/593999482328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-300 hover:brightness-90"
              style={{ background: '#2e1e0a', color: '#e8d5b7', letterSpacing: '0.05em' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.57a.75.75 0 00.927.927l5.725-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.355l-.355-.211-3.676.944.963-3.574-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Contactar por WhatsApp
            </motion.a>
          </motion.div>

          {/* RIGHT: caja 3D con medalla */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
            style={{ perspective: '800px' }}
          >
            <div style={{ perspective: '800px', width: '280px', height: '300px' }}>

              {/* CONTENEDOR 3D */}
              <div style={{ position: 'relative', width: '280px', height: '300px', transformStyle: 'preserve-3d' }}>

                {/* BASE de la caja */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '280px',
                  height: '200px',
                  borderRadius: '10px',
                  background: 'linear-gradient(160deg, #2a1a08 0%, #1a0d04 100%)',
                  boxShadow: '0 30px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,190,80,0.1)',
                  overflow: 'hidden',
                }}>
                  {/* Interior terciopelo */}
                  <div style={{
                    position: 'absolute', inset: '10px',
                    borderRadius: '6px',
                    background: 'radial-gradient(ellipse at 50% 40%, #1a0e06 0%, #0d0804 100%)',
                    boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.8)',
                  }} />
                  {/* Hueco circular para la medalla */}
                  <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '140px', height: '140px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #120a04 0%, #0a0604 100%)',
                    boxShadow: 'inset 0 6px 20px rgba(0,0,0,0.9)',
                  }} />
                </div>

                {/* TAPA de la caja (abierta hacia atrás con rotateX) */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '280px',
                  height: '130px',
                  transformOrigin: 'top center',
                  transform: 'rotateX(-42deg)',
                  borderRadius: '10px 10px 0 0',
                  background: 'linear-gradient(160deg, #3a2510 0%, #1e1006 100%)',
                  boxShadow: '0 -8px 30px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(255,190,80,0.08)',
                  overflow: 'hidden',
                }}>
                  {/* Interior tapa */}
                  <div style={{
                    position: 'absolute', inset: '8px 10px',
                    borderRadius: '6px 6px 0 0',
                    background: 'radial-gradient(ellipse at 50% 80%, #1a0e06 0%, #0d0804 100%)',
                    boxShadow: 'inset 0 -4px 16px rgba(0,0,0,0.7)',
                  }} />
                  {/* Logo grabado en tapa */}
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.2,
                  }}>
                    <Image src="/images/logo-transparente.png" alt="" width={50} height={50}
                      style={{ objectFit: 'contain', filter: 'brightness(10)' }} />
                  </div>
                </div>

                {/* MEDALLA encima de la base */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    bottom: '38px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 28%, #ffe87a 0%, #d4a020 38%, #8b6010 72%, #4a2e06 100%)',
                    border: '4px solid #e8c050',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(255,200,50,0.3), inset 0 2px 6px rgba(255,230,100,0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}
                >
                  {/* Anillo interior */}
                  <div style={{
                    position: 'absolute', inset: '6px', borderRadius: '50%',
                    border: '1px solid rgba(255,215,60,0.35)',
                  }} />
                  <Image src="/images/logo-transparente.png" alt="Campus Radices" width={55} height={55}
                    style={{ objectFit: 'contain', filter: 'brightness(0) invert(1) sepia(1) saturate(0.15)', opacity: 0.88 }}
                  />
                  <p style={{ fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,242,180,0.85)', marginTop: '3px', fontWeight: 600 }}>
                    Campus Radices
                  </p>
                  <p style={{ fontSize: '7px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,228,140,0.65)' }}>
                    Club Fundador
                  </p>
                </motion.div>

                {/* Sombra debajo de la caja */}
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '10%',
                  width: '80%', height: '20px', borderRadius: '50%',
                  background: 'rgba(0,0,0,0.35)',
                  filter: 'blur(12px)',
                }} />

              </div>
            </div>
          </motion.div>

        </div>

        {/* Logo pie */}
        <div className="flex justify-center mt-14 opacity-20">
          <Image src="/images/logo-transparente.png" alt="" width={32} height={32}
            style={{ objectFit: 'contain', filter: 'brightness(0)' }} />
        </div>
      </div>
    </section>
  );
}

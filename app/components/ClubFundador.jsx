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
      className="relative py-16 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #c8b49a 0%, #d4c4a8 50%, #bfaa8a 100%)' }}
    >
      {/* Watermark logo fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
        <Image
          src="/images/logo-transparente.png"
          alt=""
          width={460}
          height={460}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8 items-center">

          {/* LEFT: texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display leading-tight mb-5"
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 3.6rem)',
                color: '#3a1f08',
                textShadow: '1px 2px 6px rgba(0,0,0,0.18)',
              }}
            >
              Club Fundador
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body leading-relaxed mb-8"
              style={{ fontSize: '1rem', color: '#2a1508', lineHeight: '1.7' }}
            >
              Estamos invitando a las primeras familias a formar parte del Club Fundador de Campus Radices, una etapa inicial que ofrece condiciones preferenciales y beneficios exclusivos de preventa.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="https://wa.me/593999482328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body text-sm transition-all duration-300 hover:brightness-90"
              style={{
                background: '#2a1508',
                color: '#f0e0c8',
                padding: '14px 28px',
                borderRadius: '4px',
                letterSpacing: '0.02em',
                lineHeight: '1.4',
                textAlign: 'center',
              }}
            >
              Contactar por<br />Whatsapp
            </motion.a>
          </motion.div>

          {/* RIGHT: imagen caja con medalla */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <Image
              src="/images/club_fundador.png"
              alt="Medalla Club Fundador Campus Radices"
              width={300}
              height={280}
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.35))' }}
            />
          </motion.div>

        </div>

        {/* Logo pie */}
        <div className="flex justify-center mt-10 opacity-25">
          <Image
            src="/images/logo-transparente.png"
            alt=""
            width={28}
            height={28}
            style={{ objectFit: 'contain', filter: 'brightness(0)' }}
          />
        </div>
      </div>
    </section>
  );
}

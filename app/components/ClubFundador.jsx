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
        <Image src="/images/logo-transparente.png" alt="" width={460} height={460} style={{ objectFit: 'contain' }} />
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
            {/* Título con gradiente metálico dorado */}
            <motion.h2
              variants={fadeUp}
              className="font-display leading-tight mb-5"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                background: 'linear-gradient(180deg, #c49a3c 0%, #8b6010 30%, #d4a832 55%, #7a4e0c 80%, #c49a3c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.25))',
              }}
            >
              Club Fundador
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body leading-relaxed mb-8"
              style={{ fontSize: '1.1rem', color: '#2a1508', lineHeight: '1.75' }}
            >
              Estamos invitando a las primeras familias a formar parte del Club Fundador de Campus Radices, una etapa inicial que ofrece condiciones preferenciales y beneficios exclusivos de preventa.
            </motion.p>

            {/* Botón igual al de la imagen: caja oscura redondeada, texto claro centrado */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/593999482328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center font-body transition-all duration-300 hover:brightness-110"
              style={{
                background: 'linear-gradient(145deg, #3d2810 0%, #251508 100%)',
                color: '#e8d5b0',
                padding: '16px 36px',
                borderRadius: '8px',
                fontSize: '1.05rem',
                lineHeight: '1.5',
                letterSpacing: '0.01em',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,200,100,0.1)',
                textAlign: 'center',
              }}
            >
              <span>Contactar por</span>
              <span>Whatsapp</span>
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
              src="/images/club_fundador_transparente.webp"
              alt="Medalla Club Fundador Campus Radices"
              width={300}
              height={280}
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.45))' }}
            />
          </motion.div>

        </div>

        {/* Logo pie */}
        <div className="flex justify-center mt-10 opacity-20">
          <Image src="/images/logo-transparente.png" alt="" width={28} height={28}
            style={{ objectFit: 'contain', filter: 'brightness(0)' }} />
        </div>
      </div>
    </section>
  );
}

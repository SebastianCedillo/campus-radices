'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function CampusPlan() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-radices-light block mb-4"
          >
            Plano maestro
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Nuestro campus
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            Explora la distribución de espacios de Campus Radices. Usa el zoom para ver
            cada área en detalle.
          </motion.p>
        </motion.div>

        {/* PLANO CON ZOOM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative rounded-2xl overflow-hidden shadow-card-lg"
          style={{ height: '70vh', minHeight: '420px' }}
        >
          <TransformWrapper
            initialScale={1}
            minScale={0.4}
            maxScale={6}
            centerOnInit
            wheel={{ step: 0.1 }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Controles */}
                <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5">
                  <button
                    onClick={() => zoomIn()}
                    className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg text-radices-darker font-bold text-lg flex items-center justify-center hover:bg-white shadow-card transition-colors"
                    aria-label="Acercar"
                  >+</button>
                  <button
                    onClick={() => zoomOut()}
                    className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg text-radices-darker font-bold text-lg flex items-center justify-center hover:bg-white shadow-card transition-colors"
                    aria-label="Alejar"
                  >−</button>
                  <button
                    onClick={() => resetTransform()}
                    className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg text-radices-darker text-sm flex items-center justify-center hover:bg-white shadow-card transition-colors"
                    aria-label="Restablecer"
                  >↺</button>
                </div>

                <TransformComponent
                  wrapperStyle={{ width: '100%', height: '100%' }}
                  contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image
                    src="/images/plano-hd.webp"
                    alt="Plano maestro Campus Radices"
                    width={1200}
                    height={930}
                    className="rounded-xl"
                    style={{ width: 'auto', height: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    priority
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>

          {/* Hint */}
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-radices-darker/50 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 pointer-events-none whitespace-nowrap z-10">
            Pellizca o usa la rueda para hacer zoom
          </p>
        </motion.div>

      </div>
    </section>
  );
}

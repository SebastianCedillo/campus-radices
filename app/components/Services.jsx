'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

const services = [
  'Salas de velación',
  'Servicio de cremación',
  'Servicio de inhumación',
  'Capilla',
  'Capilla ardiente a domicilio',
  'Tanatopraxia y preparación',
  'Arreglos florales',
  'Cafetería',
  'Trámites legales',
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-radices-gray">
      <div className="max-w-5xl mx-auto">

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
            Lo que ofrecemos
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Servicios proyectados del campus
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-3xl mx-auto mb-3"
          >
            Campus Radices ha sido concebido como un campus funerario integral que contemplará
            distintos espacios y servicios diseñados para acompañar a las familias en cada etapa
            del proceso de despedida.
          </motion.p>
          <motion.p variants={fadeUp}
            className="text-base text-radices-text/80 font-body max-w-2xl mx-auto"
          >
            Entre los servicios proyectados dentro del desarrollo del campus se contemplan:
          </motion.p>
        </motion.div>

        {/* AVISO */}
        <motion.div
          className="mb-10 bg-radices-darker/5 border border-radices-darker/15 rounded-xl px-6 py-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-radices-darker/70 font-body italic">
            Campus Radices es un proyecto en desarrollo cuya infraestructura será implementada
            progresivamente conforme a su plan maestro.
          </p>
        </motion.div>

        {/* LISTA */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-card px-6 py-5 flex items-center justify-between group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="font-display text-radices-darker text-base">{service}</span>
              <a
                href="#contacto"
                className="text-xs font-semibold text-radices-light hover:text-radices-dark transition-colors whitespace-nowrap ml-4"
              >
                Solicitar información →
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

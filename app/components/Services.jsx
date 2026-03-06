'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    imagen: '/images/servicios/salas-velacion.jpg',
    nombre: 'Salas de Velación',
    descripcion:
      'Espacios diseñados para brindar un ambiente familiar y acogedor donde las familias puedan compartir el recuerdo y el amor en la despedida.',
  },
  {
    imagen: '/images/servicios/cremacion.jpg',
    nombre: 'Servicio de Cremación',
    descripcion:
      'El proyecto contempla servicios de cremación que permitirán a las familias honrar a su ser querido en un acto íntimo y digno.',
  },
  {
    imagen: '/images/servicios/inhumacion.jpg',
    nombre: 'Servicio de Inhumación',
    descripcion:
      'El campus contemplará diferentes alternativas para la disposición final: bóvedas, nichos, osarios, cenizarios y mausoleos familiares.',
  },
  {
    imagen: '/images/servicios/capilla.jpg',
    nombre: 'Capilla',
    descripcion:
      'Dentro del desarrollo del campus se proyecta la construcción de una capilla destinada a ceremonias religiosas y actos de despedida en un entorno de recogimiento y respeto.',
  },
  {
    imagen: '/images/servicios/capilla-domicilio.jpg',
    nombre: 'Capilla Ardiente a Domicilio',
    descripcion:
      'Como parte del acompañamiento a las familias, se contemplan servicios de velación domiciliaria cuando así lo requieran.',
  },
  {
    imagen: '/images/servicios/tanatopraxia.jpg',
    nombre: 'Tanatopraxia y Preparación',
    descripcion:
      'Se contemplan procesos profesionales de preparación y preservación del cuerpo bajo protocolos de respeto y cuidado.',
  },
  {
    imagen: '/images/servicios/arreglos-florales.jpg',
    nombre: 'Arreglos Florales',
    descripcion:
      'Servicios florales que permitirán a las familias expresar el homenaje y el amor hacia su ser querido.',
  },
  {
    imagen: '/images/servicios/cafeteria.jpg',
    nombre: 'Cafetería',
    descripcion:
      'El campus contemplará espacios destinados a servicios de cafetería para acompañar a las familias durante las velaciones.',
  },
  {
    imagen: '/images/servicios/tramites-legales.jpg',
    nombre: 'Trámites Legales',
    descripcion:
      'Se brindará orientación en trámites relacionados con certificado médico de defunción, inscripción en Registro Civil, permisos de cremación, reclamo de montepío, orientación sobre herencias y otros procesos necesarios.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-radices-gray">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          className="text-center mb-16"
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
            Nuestros Servicios
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            Las raíces no solo sostienen: nutren, conectan y dan permanencia. Por eso Campus Radices
            ofrece soluciones integrales para acompañarte en cada etapa del proceso de despedida.
          </motion.p>
        </motion.div>

        {/* GRID DE SERVICIOS */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1.5 overflow-hidden flex flex-col"
            >
              {/* FOTO */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.imagen}
                  alt={service.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay sutil para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* CONTENIDO */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-display text-radices-darker mb-3 leading-snug">
                  {service.nombre}
                </h3>
                <p className="text-radices-text font-body leading-relaxed text-base flex-1">
                  {service.descripcion}
                </p>
                <div className="mt-6 pt-5 border-t border-radices-gray">
                  <a
                    href="#contacto"
                    className="text-sm font-semibold text-radices-light hover:text-radices-dark transition-colors inline-flex items-center gap-1.5"
                  >
                    Solicitar información
                    <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

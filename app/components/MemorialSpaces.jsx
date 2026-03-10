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

const spaces = [
  {
    imagen: '/images/espacios/lotes.jpg',
    nombre: 'Lotes',
    descripcion: 'Terrenos disponibles en nuestro campus funerario donde puedes crear un espacio personalizado que refleje la memoria de tu ser querido con dignidad.',
  },
  {
    imagen: '/images/espacios/bovedas.jpg',
    nombre: 'Bóvedas',
    descripcion: 'Estructuras seguras y duraderas que ofrecen protección perpetua, disponibles en diferentes diseños y materiales para honrar la memoria familiar.',
  },
  {
    imagen: '/images/espacios/bovedas-mausoleo.jpg',
    nombre: 'Bóvedas de Mausoleo',
    descripcion: 'Construcciones monumentales que permiten albergar múltiples familias, creando un legado perdurable y un lugar de encuentro generacional.',
  },
  {
    imagen: '/images/espacios/nichos.jpg',
    nombre: 'Nichos',
    descripcion: 'Espacios compactos y accesibles ideales para urnas, disponibles en diferentes ubicaciones del campus con fácil mantenimiento y visita.',
  },
  {
    imagen: '/images/espacios/osarios.jpg',
    nombre: 'Osarios',
    descripcion: 'Espacios especiales diseñados para la disposición de restos óseos, respetando tradiciones y preferencias familiares con dignidad.',
  },
  {
    imagen: '/images/espacios/cenizarios.jpg',
    nombre: 'Cenizarios',
    descripcion: 'Estructuras especializadas para depositar cenizas, disponibles en diversos diseños que permiten un descanso eterno personalizado.',
  },
  {
    imagen: '/images/espacios/mausoleos.jpg',
    nombre: 'Mausoleos',
    descripcion: 'Construcciones privadas de gran valor arquitectónico, ideales para familias que desean un monumento único y distintivo en el campus.',
  },
  {
    imagen: '/images/espacios/arbol-vida.jpg',
    nombre: 'Árbol de Vida',
    descripcion: 'Espacio simbólico y ecológico donde las cenizas se dispersan en la naturaleza, creando un legado vivo que perdura en el tiempo.',
  },
];

export default function MemorialSpaces() {
  return (
    <section id="espacios" className="py-24 px-4 bg-white">
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
            Descanso eterno
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Espacios memoriales
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            Diversas opciones para crear un espacio duradero que honre la memoria de quienes
            amamos, reflejando nuestros valores y tradiciones familiares.
          </motion.p>
        </motion.div>

        {/* GRID DE ESPACIOS */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {spaces.map((space, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              className="group bg-white border border-radices-gray rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1.5 overflow-hidden flex flex-col"
            >
              {/* FOTO */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={space.imagen}
                  alt={space.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* CONTENIDO */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-display text-radices-darker mb-2 leading-snug">
                  {space.nombre}
                </h3>
                <p className="text-radices-text font-body leading-relaxed text-sm flex-1">
                  {space.descripcion}
                </p>
                <div className="mt-5 pt-4 border-t border-radices-gray">
                  <a
                    href="#contacto"
                    className="text-xs font-semibold text-radices-light hover:text-radices-dark transition-colors inline-flex items-center gap-1"
                  >
                    Más información
                    <span className="text-base leading-none">→</span>
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

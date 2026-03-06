'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileCheck, BookOpen, Lock, Gift, DollarSign, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

const procedures = [
  {
    icon: FileCheck,
    nombre: 'Certificado Médico de Defunción',
    descripcion: 'Orientación y gestión para obtener el certificado médico de forma rápida y sin complicaciones.',
  },
  {
    icon: BookOpen,
    nombre: 'Inscripción en Registro Civil',
    descripcion: 'Asistencia completa en el registro oficial de la defunción en los organismos correspondientes.',
  },
  {
    icon: Lock,
    nombre: 'Permisos de Cremación',
    descripcion: 'Tramitación de todos los permisos legales requeridos para el proceso de cremación.',
  },
  {
    icon: DollarSign,
    nombre: 'Reclamo de Montepío',
    descripcion: 'Asesoría especializada para gestionar beneficios de montepío y ayudas sociales disponibles.',
  },
  {
    icon: Gift,
    nombre: 'Orientación sobre Herencias',
    descripcion: 'Guía profesional en temas de herencia y distribución de bienes según la ley ecuatoriana.',
  },
  {
    icon: CheckCircle,
    nombre: 'Otros Trámites Necesarios',
    descripcion: 'Gestión de cualquier otro trámite legal que requiera tu familia durante este proceso.',
  },
];

export default function LegalProcedures() {
  return (
    <section className="bg-radices-gray">

      {/* IMAGEN BANNER */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src="/images/servicios/tramites-legales.jpg"
          alt="Trámites legales Campus Radices"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-radices-darker/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-radices-light mb-3">Gestión legal</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">Trámites Legales Completos</h2>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto">

        {/* SUBTÍTULO */}
        <motion.p
          className="text-lg text-radices-text font-body max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Nuestro equipo especializado te guía en cada trámite legal, permitiéndote
          dedicar tu energía a lo más importante: honrar la memoria de quien amas.
        </motion.p>

        {/* GRID */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {procedures.map((procedure, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-radices-darker to-radices-dark p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <procedure.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display text-white leading-snug">
                  {procedure.nombre}
                </h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-radices-text font-body leading-relaxed flex-1">
                  {procedure.descripcion}
                </p>
                <div className="mt-5 pt-4 border-t border-radices-gray">
                  <a
                    href="#contacto"
                    className="text-sm font-semibold text-radices-light hover:text-radices-dark transition-colors inline-flex items-center gap-1"
                  >
                    Más información
                    <span className="text-base leading-none">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BANNER CTA */}
        <motion.div
          className="mt-16 bg-radices-darker rounded-2xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-xl font-display mb-3">No estás solo en este proceso.</p>
          <p className="font-body text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
            Nuestro equipo especializado está disponible para guiarte en cada paso y resolver
            todas tus dudas sobre los trámites legales necesarios.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-radices-light text-white font-semibold rounded-full hover:bg-radices-mid transition-all duration-300 hover:shadow-xl hover:shadow-radices-light/30 hover:-translate-y-0.5"
          >
            Agendar Asesoría Legal Gratuita
          </a>
        </motion.div>

      </div>
    </section>
  );
}

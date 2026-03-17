'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const contactInfo = [
  { icon: Phone,   titulo: 'Teléfono',   valor: '+593 96 278 8765', href: 'tel:+593962788765' },
  { icon: Mail,    titulo: 'Email',      valor: 'familia@campusradices.com', href: 'mailto:familia@campusradices.com' },
  { icon: Clock,   titulo: 'Horario',    valor: 'Lunes a Domingo · 08:00 – 18:00', href: null },
];

const inputClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-radices-text font-body text-base focus:outline-none focus:border-radices-light focus:ring-2 focus:ring-radices-light/20 transition-all placeholder-gray-400';

export default function ContactSection() {
  const [formData, setFormData] = useState({ nombre: '', apellido: '', telefono: '', correo: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [telefonoError, setTelefonoError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Hola, mi nombre es ${formData.nombre} ${formData.apellido}. Mi teléfono es ${formData.telefono}. Mi correo es ${formData.correo}. ${formData.mensaje}`.trim();
    const url = `https://wa.me/593962788765?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    setFormData({ nombre: '', apellido: '', telefono: '', correo: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-white">
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
            Estamos aquí para ti
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-5xl font-display text-radices-darker mb-4 leading-tight"
          >
            Conversemos
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-radices-light mx-auto rounded-full mb-6" />
          <motion.p variants={fadeUp}
            className="text-lg text-radices-text font-body max-w-2xl mx-auto"
          >
            Un asesor de Campus Radices puede orientarte para planificar hoy la tranquilidad de tu familia.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* INFO DE CONTACTO */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={fadeUp}
              className="text-2xl font-display text-radices-darker mb-8"
            >
              Información de contacto
            </motion.h3>

            <motion.div variants={stagger} className="space-y-5 mb-10">
              {contactInfo.map((info, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-radices-light/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <info.icon className="w-5 h-5 text-radices-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-radices-darker mb-0.5">{info.titulo}</p>
                    {info.href ? (
                      <a href={info.href} className="text-radices-text font-body hover:text-radices-light transition-colors">
                        {info.valor}
                      </a>
                    ) : (
                      <p className="text-radices-text font-body">{info.valor}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="https://wa.me/593962788765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1ebe5a] transition-all duration-300 hover:shadow-lg mb-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </motion.div>

          </motion.div>

          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-radices-cream rounded-2xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-display text-radices-darker mb-6">
              Envía tu mensaje
            </h3>

            {sent && (
              <div className="mb-6 p-4 bg-radices-light/15 border border-radices-light/30 rounded-xl text-radices-dark font-body">
                ✓ Gracias por tu mensaje. Un asesor se contactará contigo pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-radices-darker mb-1.5">Nombre *</label>
                  <input
                    type="text" name="nombre" value={formData.nombre}
                    onChange={handleChange} required
                    className={inputClass} placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-radices-darker mb-1.5">Apellido *</label>
                  <input
                    type="text" name="apellido" value={formData.apellido}
                    onChange={handleChange} required
                    className={inputClass} placeholder="Tu apellido"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-radices-darker mb-1.5">Teléfono *</label>
                <input
                  type="tel" name="telefono" value={formData.telefono}
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (/[a-zA-Z]/.test(raw)) {
                      setTelefonoError('Solo se permiten números');
                      return;
                    }
                    const v = raw.replace(/[^\d]/g, '');
                    if (v.length > 10) {
                      setTelefonoError('El número no puede tener más de 10 dígitos');
                      return;
                    }
                    setTelefonoError('');
                    setFormData(prev => ({ ...prev, telefono: v }));
                  }}
                  required className={inputClass} placeholder="0999482328"
                />
                {telefonoError && <p className="text-xs text-red-500 mt-1">{telefonoError}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-radices-darker mb-1.5">Correo electrónico *</label>
                <input
                  type="email" name="correo" value={formData.correo}
                  onChange={handleChange} required
                  className={inputClass} placeholder="tucorreo@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-radices-darker mb-1.5">Mensaje *</label>
                <textarea
                  name="mensaje" value={formData.mensaje}
                  onChange={handleChange} required rows="5"
                  className={`${inputClass} resize-none`}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-radices-darker text-white font-semibold rounded-xl hover:bg-radices-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Hablar con un asesor
              </button>

              <p className="text-center text-xs text-gray-400 font-body">
                Nos comprometemos a responder dentro de 24 horas
              </p>
            </form>
          </motion.div>

        </div>

        {/* MAPA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display text-radices-darker mb-6">Nuestra ubicación</h3>
          <div className="rounded-2xl overflow-hidden shadow-card-lg h-80 md:h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=0.983897,-79.622559&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Campus Radices"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

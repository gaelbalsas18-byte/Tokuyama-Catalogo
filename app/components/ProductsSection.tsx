"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProductsSection() {
  return (
    <section id="productos" className="relative bg-white text-black overflow-hidden">

      {/* ===== PRODUCTO DESTACADO ===== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10 pt-24 md:pt-32">

        {/* Imagen producto (aparece arriba en móvil) */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/Productos/Universal2.png"
              alt="Palfiqué Bond"
              width={480}
              height={420}
              className="object-contain w-72 sm:w-80 md:w-[480px]"
            />
          </motion.div>
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 mb-3">
            Producto destacado.
          </h3>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Palfiqué Bond
          </h2>

          <p className="text-base sm:text-lg text-black mb-8 leading-relaxed max-w-md">
            Sistema adhesivo universal de Tokuyama que ofrece una adhesión
            confiable, alta durabilidad clínica y un manejo sencillo para
            procedimientos restaurativos de alto nivel.
          </p>

          <Link href="/Catalogo">
            <button className="px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      {/* ===== TARJETAS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20 pb-24">

        <h3 className="text-2xl sm:text-3xl font-semibold mb-8">
          Más productos Tokuyama.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <Image
              src="/Productos/ESTECEM KIT.jpg"
              alt="Estecem Plus"
              width={200}
              height={140}
              className="mx-auto mb-6"
            />
            <h4 className="text-lg font-semibold mb-2 text-center">Estecem Plus.</h4>
            <p className="text-sm text-neutral-600">
              Cemento de resina adhesiva, procedimiento simple y versátil,
              adhesivo confiable.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <Image
              src="/Productos/Resinas/PALFIQUE LX5.jpg"
              alt="Palfique LX5"
              width={200}
              height={140}
              className="mx-auto mb-6"
            />
            <h4 className="text-lg font-semibold mb-2 text-center">Palfique LX5</h4>
            <p className="text-sm text-neutral-600">
              Resina Palfique LX5 de Tokuyama Dental con tecnología avanzada.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <Image
              src="/Productos/Resinas/Palfique asteria.jpg"
              alt="Palfique Asteria"
              width={200}
              height={140}
              className="mx-auto mb-6"
            />
            <h4 className="text-lg font-semibold mb-2 text-center">
              Palfique Asteria
            </h4>
            <p className="text-sm text-neutral-600">
              Composite altamente estético, gran retención de brillo y difusión de luz.
            </p>
          </div>
        </div>

        {/* BOTÓN */}
        <div className="w-full flex justify-center mt-14">
          <Link href="/Catalogo">
            <button className="px-10 py-3 border border-black tracking-wide uppercase text-sm hover:bg-black hover:text-white transition-all duration-300">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      {/* ===== DECORATIVOS (solo desktop) ===== */}

      {/* Marco superior */}
      <div className="hidden md:block absolute top-0 right-0">
        <Image
          src="/logos/marco palfique.png"
          alt="Marco"
          width={620}
          height={440}
        />
      </div>

      {/* Marco inferior */}
      <div className="hidden md:block absolute bottom-0 left-0">
        <Image
          src="/logos/marco inverso.png"
          alt="Marco"
          width={620}
          height={440}
        />
      </div>

    </section>
  )
}

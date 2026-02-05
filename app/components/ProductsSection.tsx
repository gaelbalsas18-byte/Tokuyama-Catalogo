"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="relative bg-white text-black overflow-hidden py-24"
    >

      {/* ===== PRODUCTO DESTACADO ===== */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* Columna visual (solo para desktop/tablet) */}
        <div className="hidden md:block" />

        {/* Texto */}
        <div className="flex flex-col justify-center">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
            Producto destacado
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
            <button className="w-fit px-8 py-3 border border-black font-medium hover:bg-black hover:text-white transition-colors">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      {/* ===== TARJETAS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-24">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-8">
          Más productos Tokuyama
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              img: "/Productos/ESTECEM KIT.jpg",
              title: "Estecem Plus",
              desc:
                "Cemento de resina adhesiva, procedimiento simple y versátil, adhesivo confiable.",
            },
            {
              img: "/Productos/Resinas/PALFIQUE LX5.jpg",
              title: "Palfique LX5",
              desc:
                "Resina Palfique LX5 de Tokuyama Dental con tecnología avanzada.",
            },
            {
              img: "/Productos/Resinas/Palfique asteria.jpg",
              title: "Palfique Asteria",
              desc:
                "Composite altamente estético, gran retención de brillo y difusión de luz (RAP).",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={220}
                height={160}
                className="mx-auto mb-6"
              />
              <h4 className="text-lg font-semibold mb-2 text-center">
                {p.title}
              </h4>
              <p className="text-sm text-neutral-600 text-center">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/Catalogo">
            <button className="px-10 py-3 border border-black tracking-wide uppercase text-sm hover:bg-black hover:text-white transition">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      {/* ===== DECORATIVOS (solo tablet/desktop) ===== */}
      <motion.div
        className="hidden md:block absolute top-32 left-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/Productos/Universal2.png"
          alt="Palfiqué Bond"
          width={480}
          height={420}
        />
      </motion.div>

      <div className="hidden md:block absolute top-0 right-0">
        <Image
          src="/logos/marco palfique.png"
          alt="Marco Palfiqué"
          width={520}
          height={420}
        />
      </div>
    </section>
  )
}

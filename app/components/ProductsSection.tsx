"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProductsSection() {
  return (
    <section id="productos" className="relative min-h-screen bg-white text-black overflow-hidden">
      
      {/* ===== BLOQUE SUPERIOR: PRODUCTO DESTACADO ===== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-10 pt-32">
      
        {/* Columna izquierda (visual vacío para balance) */}
        <div></div>

        {/* Columna derecha - Texto */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
            Producto destacado.
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Palfiqué Bond
          </h2>

          <p className="text-lg text-black mb-8 leading-relaxed max-w-md">
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

      {/* ===== TARJETAS DE PRODUCTOS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 mt-20 pb-24">
        <h3 className="text-3xl font-semibold mb-5">
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
              Composite altamente estético, gran retención de brillo y
              difusión de luz (tecnología RAP).
            </p>
          </div>
        </div>

        {/* Botón centrado */}
        <div className="w-full flex justify-center mt-16">
          <Link href="/Catalogo"><button  className="px-10 py-3 border border-black tracking-wide uppercase text-sm hover:bg-black hover:text-white transition-all duration-300">
            Ver más
          </button></Link>
        </div>
      </div>
      {/* ===== IMÁGENES DECORATIVAS ===== */}

      {/* Imagen Palfiqué Bond con ANIMACIÓN */}
      <motion.div
        className="absolute top-20 left-15 p-1"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          src="/Productos/Universal2.png"
          alt="Palfiqué Bond"
          width={520}
          height={440}
          className="object-contain"
        />
      </motion.div>


    {/* Imagen Palfiqué Bond con ANIMACIÓN */}
      <motion.div
        className="absolute top-220 left-0 p-1"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
         <Image
          src="/logos/marco inverso.png"
          alt="Marco"
          width={620}
          height={440}
          className="object-contain"
        />
      </motion.div>

      {/* Marco superior derecho */}
      <div className="absolute top-0 right-0 p-1">
        <Image
          src="/logos/marco palfique.png"
          alt="Marco Palfiqué"
          width={620}
          height={440}
          className="object-contain"
        />
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductsSection() {

  // 🔥 PRODUCTOS (imagen + texto)
  const products = [
    {
      img: "/Productos/Resinas/omnichroma.png",
      frame: "/logos/fondo.png",
      title: "Omnichroma",
      subtitulo: "Proximamente",
      desc: "Es el primer compuesto universal del mundo que combina estéticamente a casi todos los pacientes con un solo tono, permite combinar todos los tonos, una ciencia que llamamos Tecnología Cromática Inteligente.",
      effect: "rainbow",
    },
    {
      img: "/Productos/Universal2.png",
      frame: "/logos/marco palfique.png",
      title: "Palfique Universal Bond",
      subtitulo: "Adquiérelo",
      desc: "Sistema adhesivo universal de Tokuyama que ofrece una adhesión confiable, alta durabilidad clínica y un manejo sencillo para procedimientos restaurativos de alto nivel.",
      effect: "palfique",
    },
  ]

type EffectType = "rainbow" | "palfique"

const getTitleClass = (effect?: EffectType) => {
  const map: Record<EffectType, string> = {
    rainbow: "text-rainbow",
    palfique: "text-palfique",
  }

  return effect ? map[effect] : ""
}

  const [index, setIndex] = useState(0)

 const next = () => {
  if (products.length <= 1) return
  setIndex((prev) => (prev + 1) % products.length)
}

  // 🔁 AUTO CAMBIO
      useEffect(() => {
        if (products.length <= 1) return

        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % products.length)
        }, 4000)

        return () => clearInterval(interval)
      }, [products.length])

  return (
    <section id="productos" className="relative bg-white text-black overflow-hidden">

      {/* ===== PRODUCTO DESTACADO ===== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10 pt-24 md:pt-32">

        {/* 🔥 CARRUSEL */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative w-72 sm:w-80 md:w-[480px] h-[420px] flex items-center justify-center"
          >

            <AnimatePresence>
              {products.map((item, i) => {
                const position = (i - index + products.length) % products.length
                return (
                  <motion.div
                    key={i}
                    className="absolute cursor-pointer"
                    onClick={next}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: position === 0 ? 1 : 0.6,
                      scale: position === 0 ? 1 : 0.9,
                      rotate: position === 0 ? 1 : position % 2 === 0 ? -6 : 8,
                      zIndex: products.length - position,
                      x: position === 1 ? 10 : position % 2 === 0 ? -20 : 50,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-[420px] h-[360px] bg-white rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border border-black">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={380}
                        height={300}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

          </motion.div>
        </div>

        {/* 📝 TEXTO DINÁMICO */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-xs sm:text-sm uppercase tracking-widest text-black mb-3">
            Producto destacado.
          </h3>

          <motion.h2
            key={products[index].title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
           className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 ${getTitleClass(products[index].effect as EffectType)}`}
          >
            {products[index].title}
          </motion.h2>

          <motion.h4
          key={products[index].subtitulo}
          initial={{ opacity: 0, y: 10}}
          animate={{ opacity: 1, y:  0}}
          className="text-2xl sm:text-4xl md:text-xl font-semibold mb-6">
            {products[index].subtitulo}
          </motion.h4>

          <motion.p
            key={products[index].desc}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base sm:text-lg text-black mb-8 leading-relaxed max-w-md"
          >
            {products[index].desc}
          </motion.p>
        </div>
      </div>

      {/* ===== TARJETAS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20 pb-24">

        <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Más productos Tokuyama.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-black/10">
            <Image
              src="/Productos/Desensibilizantes/ShieldForce.jpg"
              alt="SHIELDFORCE"
              width={200}
              height={140}
              className="mx-auto mb-6"
            />
            <h4 className="text-lg font-semibold mb-2 text-center">SHIELDFORCE.</h4>
            <p className="text-sm text-neutral-600">
              Sellador protector de un solo componente, de aplicación única y fotopolimerizable.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-black/10">
            <Image
              src="/Productos/Rebases/Rebase II Kit Normal.png"
              alt="Rebase II Kit Normal"
              width={200}
              height={140}
              className="mx-auto mb-6"
            />
            <h4 className="text-lg font-semibold mb-2 text-center">Rebase II Kit Normal</h4>
            <p className="text-sm text-neutral-600">
              Es un material de rebase para uso en el consultorio dental que mejora las ventajas de su predecesor.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-black/10">
            <Image
              src="/Productos/Accesorios/Estelite Omega Brush.png"
              alt="Estelite Omega Brush"
              width={200}
              height={140}
              className="mx-auto mb-6"
            />
            <h4 className="text-lg font-semibold mb-2 text-center">
              Estelite Omega Brush
            </h4>
            <p className="text-sm text-neutral-600">
              Pinceles especializados para el modelado preciso de composites dentales.
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

      {/* ===== DECORATIVOS ===== */}
      <div className="opacity-60 hidden md:block absolute top-0 right-0 pointer-events-none">
      <motion.div
      key={products[index].frame}
      initial={{ opacity: 0, scale: 1.05}}
      animate={{ opacity: 1, scale: 1}}
      transition={{duration: 0.6}}>
        <Image
        src={products[index].frame}
        alt="Marco"
        width={620}
        height={440}
        />
      </motion.div>
      </div>
    </section>
  )
}
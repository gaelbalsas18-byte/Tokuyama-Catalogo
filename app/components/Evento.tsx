"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const IMAGENES_EVENTO = [
  "/Evento/1.png",
  "/Evento/2.png",
  "/Evento/3.png",
  "/Evento/4.png",
  "/Evento/5.png",
  "/Evento/6.png",
  "/Evento/7.png",
  "/Evento/8.png",
  "/Evento/9.png",
  "/Evento/10.png",
]

export default function Evento() {
  const [index, setIndex] = useState(0)

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGENES_EVENTO.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="eventos"
      className="relative min-h-screen bg-white text-black overflow-hidden"
    >
      {/* ===== ENCABEZADO ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-10"
      >
        <h3 className="px-10 mt-20 text-4xl font-semibold mb-4 text-blue-800 text-center">
          Eventos Tokuyama 2026
        </h3>

        <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3 text-center">
          Balsas x Tokuyama
        </h3>
      </motion.div>

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-10 items-center">
        
        {/* ===== TEXTO ===== */}
        <div className="flex flex-col justify-center">
          <p className="text-lg text-black leading-relaxed max-w-md">
            Te invitamos a conocer la información del Tokuyama Fest, un evento que
            reúne a odontólogos especialistas en un espacio diseñado para el
            aprendizaje, la innovación y el intercambio de experiencias.
            <br /><br />
            Descubre todos los detalles y sé parte de esta experiencia única
            para la comunidad odontológica.
          </p>
        </div>

        {/* ===== IMAGEN AUTOMÁTICA ===== */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={IMAGENES_EVENTO[index]}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={IMAGENES_EVENTO[index]}
                alt="Evento Tokuyama"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ===== BOTÓN ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 mt-20 pb-24">
        <div className="w-full flex justify-center">
          
            <button className="px-10 py-3 border border-black tracking-wide uppercase text-sm hover:bg-black hover:text-white transition-all duration-300">
              Proximamente
            </button>
        </div>
      </div>
    </section>
  )
}

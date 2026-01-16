"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const CASOS = [
  {
    titulo: "Restauración clase I en Od 46 con tokuyama Asteria",
    imagen: "/Casos/caso1T.jpg",
    pasos: [
      "Tokuyama Asteria a3B",
      "Tokuyama Asteria WE",
      "Stain ochre y Dark Brown",
      "Tokuyama Universal Bond",
      "Cambio de restauración en resina, logramos el objetivo de devolver anatomía y función. Molar 47 sellamos con resina universal flow consistencia High.",
    ],
  },
  {
    titulo: "Restauración clase II con resinas Asteria y sistema palodent Dentsply",
    imagen: "/Casos/caso2T.jpg",
    pasos: [
      "Estratificación con resinas Tokuyama Asteria:",
      "Sistema Palodent Dentsply",
      "Asteria A2B",
      "Asteria WE",
      "Asteria BL",
      "Stains ochre y Dark Brown",
      "Adhesivo Tokuyama Universal Bond",
      "Logramos restaurar un buen punto de contacto, y una buena anatomía",
    ],
  },
]


export default function Casos() {
  const [index, setIndex] = useState(0)
  const [casoActivo, setCasoActivo] = useState<any>(null)

  useEffect(() => {
    if (casoActivo) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CASOS.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [casoActivo])

  return (
    <section 
    id="Casos"
    className="relative bg-white py-32">
      {/* ===== ENCABEZADO ===== */}
      <div className="max-w-6xl mx-auto text-center px-10">
        <h3 className="text-4xl font-semibold text-blue-800">
          Casos Clínicos
        </h3>

        <p className="text-sm uppercase tracking-widest text-neutral-500 mt-4">
          Balsas x Tokuyama
        </p>

        <p className="text-black mt-6 max-w-2xl mx-auto leading-relaxed">
          Descubre los casos clínicos con productos Tokuyama y observa la calidad
          que ofrecen.
          <br />
          Así como también el excelente trabajo que realizan nuestros especialistas.
        </p>
      </div>

      {/* ===== CONTENIDO ===== */}
      <motion.div
        layout
        className={`max-w-4xl mx-auto px-10 mt-14 grid gap-12 items-start
          ${
            casoActivo
              ? "grid-cols-1 lg:grid-cols-[1fr_300px]"
              : "grid-cols-1"
          }
        `}
      >
        {/* ===== IMAGEN ===== */}
        <motion.div
          layout
          onClick={() => setCasoActivo(CASOS[index])}
          className={`relative w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer
            ${
              casoActivo
                ? "h-[360px] md:h-[460px] lg:h-[560px] xl:h-[620px]"
                : "h-[320px] md:h-[420px] lg:h-[500px] max-w-3xl mx-auto"
            }
          `}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={CASOS[index].imagen}
                alt="Caso clínico"
                fill
                className="object-contain bg-white"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ===== PANEL DE PASOS ===== */}
        <AnimatePresence>
          {casoActivo && (
            <motion.aside
              layout
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 sticky top-32"
            >
              <button
                onClick={() => setCasoActivo(null)}
                className="text-neutral-400 hover:text-black mb-4"
              >
                ✕
              </button>

              <h4 className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
                    Caso clínico
                  </h4>

                  <h3 className="text-1xl font-semibold text-blue-800 mb-6 leading-tight">
                    {casoActivo.titulo}
                  </h3>


              <ul className="space-y-3 text-sm text-neutral-700">
                {casoActivo.pasos.map((paso: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-800 font-semibold">
                      {i + 1}.
                    </span>
                    <span>{paso}</span>
                  </li>
                ))}
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

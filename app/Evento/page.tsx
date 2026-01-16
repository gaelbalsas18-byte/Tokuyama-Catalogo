"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { section } from "framer-motion/client"


export default function Evento() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Seccion de casos clinicos.*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-16"
      >
          <h3 className="max-w-6xl mx-auto px-10 mt-0 text-4xl font-semibold mb-4 text-blue-800 text-center">
            Eventos Tokuyama 2026
          </h3>
                {/* Balsas x Tokuyama - Texto */}
          <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3 text-center">
            Balsas x Tokuyama
          </h3>
        <h4 className=" text-white text-lg text-center">
          Te presentamos los eventos que se realizaran este año.
        </h4>
            <h4 className=" text-white text-lg text-center mb-3">
              TOKUYAMA FEST.
            </h4>
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3 text-center">
              Interfaz en Stand BY
            </h3>
      </motion.div>
    </section>
  )
}

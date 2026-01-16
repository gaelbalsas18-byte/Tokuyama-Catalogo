"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* VIDEO FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/espferas.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* LOGO BALSAS */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 z-20"
      >
        <Image
          src="/logos/logo balsas.png"
          alt="Balsas"
          width={140}
          height={110}
          priority
        />
      </motion.div>

      {/* LOGO TOKUYAMA */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="absolute top-0 right-240 z-20"
      >
        <Image
          src="/logos/logo tokuyama.png"
          alt="Tokuyama Dental"
          width={140}
          height={110}
          priority
        />
      </motion.div>

      {/* TEXTO */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-xl z-10">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-5xl text-blue-800 font-semibold leading-tight"
        >
          Innovación japonesa <br />
          en productos clínicos <br />
          de alta calidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-black text-lg"
        >
          Soluciones dentales de precisión respaldadas
          por tecnología <br/> japonesa de vanguardia.
        </motion.p>
      </div>
    </section>
  )
}

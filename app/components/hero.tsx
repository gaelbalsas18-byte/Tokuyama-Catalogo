"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* VIDEO FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/espferas.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* LOGOS */}
      <div className="absolute top-4 left-0 right-0 z-20 px-4">
        <div className="flex items-center justify-between max-w-3xl mx-auto">

          {/* BALSAS */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logos/logo balsas.png"
              alt="Balsas"
              width={100}
              height={80}
              className="w-16 sm:w-20 md:w-24"
              priority
            />
          </motion.div>

          {/* TOKUYAMA */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/logos/logo tokuyama.png"
              alt="Tokuyama Dental"
              width={100}
              height={80}
              className="w-16 sm:w-20 md:w-24"
              priority
            />
          </motion.div>

        </div>
      </div>

      {/* TEXTO */}
      <div className="relative z-10 flex items-center min-h-screen px-6">
        <div className="w-full max-w-2xl mx-auto text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-3xl
              sm:text-4xl
              md:text-4xl
              font-semibold
              leading-tight
              text-blue-800
            "
          >
            Innovación japonesa <br />
            en productos clínicos <br />
            de alta calidad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mt-4
              text-base
              sm:text-lg
              text-black
            "
          >
            Soluciones dentales de precisión respaldadas
            por tecnología japonesa de vanguardia.
          </motion.p>

        </div>
      </div>

    </section>
  )
}

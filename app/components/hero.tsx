"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* VIDEO 
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/espferas.mp4" type="video/mp4" />
      </video>
      */}
      <img
      src="/banner omnicroma.jpg"
      alt="Imagen Banner"
      className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* CONTENEDOR GENERAL */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* LOGOS JUNTOS (lado izquierdo) */}
        <div className="flex items-center gap-4 px-6 pt-4 max-w-7xl mx-auto w-full">
          
          {/* BALSAS 
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logos/logo balsas.png"
              alt="Balsas"
              width={140}
              height={110}
              className="w-20 md:w-28"
              priority
            />
          </motion.div> */}

          {/* TOKUYAMA 
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/logos/logo tokuyama.png"
              alt="Tokuyama Dental"
              width={140}
              height={110}
              className="w-20 md:w-28"
              priority
            />
          </motion.div>*/}

        </div>

        {/* TEXTO HERO 
        <div className="flex flex-1 items-center px-6">
          <div className="max-w-xl">

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
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
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
        </div> */}

      </div>
    </section>
  )
}

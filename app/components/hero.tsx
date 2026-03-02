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

        {/* Banner */}
        <div className="absolute inset-0">
          <img
            src="/omnichroma.jpg"
            alt="Imagen Banner"
            className="w-full h-full object-contain sm:object-cover bg-black"
          />
        </div>

        {/* Logos */}
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              absolute 
              left-30 -translate-x-1/2 top-72   /* 📱 móvil centrado */
              sm:left-1/2 sm:-translate-x-1/2 sm:top-80   /* 📲 tablet */
              md:left-75 md:top-105 md:translate-x-0   /* 🖥 desktop (tus valores originales) */
              z-10
            "
          >
            <img
              src="/logos/BalsasTrans.png"
              alt="Balsas"
              className="w-16 sm:w-20 md:w-20"
            />
          </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              absolute 
              left-52 -translate-x-1/2 top-77  /* 📱 móvil */
              sm:left-1/2 sm:-translate-x-1/2 sm:top-[26rem] /* 📲 tablet */
              md:right-166 md:top-108 md:left-auto md:translate-x-0 /* 🖥 desktop */
              z-10
            "
          >
            <img
              src="/logos/tokuyama-logo.png"
              alt="Tokuyama"
              className="w-24 sm:w-32 md:w-48"
            />
          </motion.div>
        
       <motion.div
          animate={{
            opacity: 1,
            scale: 1.2,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 2 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute 
            left-1/2 -translate-x-1/2 top-52   /* 📱 móvil */
            sm:top-56                          /* 📲 tablet */
            md:left-50 md:top-40 md:translate-x-0 /* 🖥 desktop original */
            z-15
          "
        >
          <img
            src="/fecha.png"
            alt="Fecha"
            className="w-72 sm:w-96 md:w-[720px]"
          />
        </motion.div>
        
        {/*Encabezado*/}
        <div
          className="
            absolute 
            left-40 -translate-x-1/2 top-40   /* 📱 móvil */
            sm:top-36                          /* 📲 tablet */
            md:left-80 md:top-45 md:translate-x-0 /* 🖥 desktop */
            z-15
          "
        >
          <motion.h4
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl"
          >
            Próximamente
          </motion.h4>
        </div>

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

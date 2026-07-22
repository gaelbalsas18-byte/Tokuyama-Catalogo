"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

       VIDEO 
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/espferas.mp4" type="video/mp4" />
      </video>
      
        {/* Banner */}
        {/*<div className="absolute inset-0">
          <img
            src="/omnichroma.jpg"
            alt="Imagen Banner"
            className="w-full h-full object-contain sm:object-cover bg-black"
          />
        </div>*/}

        {/* Contenido del Hero */}
<div className="absolute inset-0 z-20 flex items-center">

  <div className="
      w-full
      max-w-7xl
      mx-auto
      px-6
      md:px-10
      lg:px-20

      flex
      flex-col-reverse
      md:flex-row

      items-center
      justify-between
      gap-10
  ">

    {/* ==================== TEXTO ==================== */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="
        w-full
        md:w-1/2

        text-center
        md:text-left
      "
    >

      <h1 className="
          text-3xl
          sm:text-4xl
          lg:text-6xl

          font-bold
          text-blue-700
          leading-tight
      ">
        Donde la innovación se convierte en excelencia
      </h1>

      <p className="
          mt-6

          text-base
          sm:text-lg
          lg:text-xl

          text-gray-700
          leading-relaxed
      ">
        Reconocida por desarrollar materiales de alta calidad que brindan
        precisión, confianza y excelentes resultados clínicos.
      </p>

    </motion.div>

    {/* ==================== LOGOS ==================== */}

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="
          w-full
          md:w-1/2

          flex
          justify-center
          md:justify-end

          items-center
          gap-6
          lg:gap-10
      "
    >

      <img
        src="/logos/BalsasTrans.png"
        alt="Balsas"
        className="
            w-20
            sm:w-24
            md:w-28
            lg:w-36
        "
      />

      <img
        src="/logos/tokuyama-logo.png"
        alt="Tokuyama"
        className="
            w-36
            sm:w-44
            md:w-52
            lg:w-64
        "
      />

    </motion.div>

  </div>

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

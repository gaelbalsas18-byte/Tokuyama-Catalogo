"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Step = "name" | "menu" | "idle"

export default function Chatbot() {
  const [open, setOpen] = useState(true)
  const [minimized, setMinimized] = useState(false)
  const [step, setStep] = useState<Step>("name")
  const [name, setName] = useState("")

  const openSound = useRef<HTMLAudioElement | null>(null)
  const minimizeSound = useRef<HTMLAudioElement | null>(null)
  const idleTimer = useRef<NodeJS.Timeout | null>(null)

  /* ---------- SONIDOS (solo con interacción) ---------- */
  useEffect(() => {
    openSound.current = new Audio("/sounds/click.wav")
    minimizeSound.current = new Audio("/sounds/click.wav")
  }, [])

  const playOpen = () => openSound.current?.play().catch(() => {})
  const playMinimize = () => minimizeSound.current?.play().catch(() => {})

  /* ---------- TIMER: ¿SIGUES AHÍ? (5 MIN) ----------MENSAJE */
  useEffect(() => {
    resetIdleTimer()
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [step, open, minimized])

  const resetIdleTimer = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current)

    idleTimer.current = setTimeout(() => {
      if (!minimized) {
        setStep("idle")
        setOpen(true)
        setMinimized(false)
      }
    }, 5 * 60 * 1000) // 5 minutos
  }

  /* ---------- ACCIONES ---------- */
  const handleStart = () => {
    if (!name.trim()) return
    playOpen()
    setStep("menu")
    resetIdleTimer()
  }

  const goToSection = (id: string) => {
    playMinimize()
    setMinimized(true)

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 250)
  }

  const resumeChat = () => {
    playOpen()
    setStep(name ? "menu" : "name")
    setMinimized(false)
    setOpen(true)
    resetIdleTimer()
  }

  return (
    <>
      {/* BOTÓN DE MINIMIZAR */}
      <AnimatePresence>
        {minimized && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={resumeChat}
            className="fixed bottom-6 right-6 z-50 rounded-xl bg-black/60 px-4 py-2 text-xs text-white backdrop-blur hover:bg-black transition"
          >
            Asistente en espera
          </motion.button>
        )}
      </AnimatePresence>

      {/* CHATBOT */}
      <AnimatePresence>
        {open && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl border bg-white shadow-2xl overflow-hidden"
          >
            {/* 🔵 LÍNEA AZUL ANIMADA */}
            <div className="relative h-[5px] w-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full w-1/3 bg-blue-800"
                animate={{
                  x: ["-300%", "300%"],
                  opacity: [0.5, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            {/* HEADER */}
            <div className="flex items-center justify-between bg-white border-b px-4 py-3 text-sm font-medium text-blue-800">
              Asistente TOKUYAMA
              <button
                onClick={() => {
                  playMinimize()
                  setMinimized(true)
                }}
                className="text-xs text-blue-800 hover:text-red-400 font-medium"
              >
                x
              </button>
            </div>

            {/* BODY */}
            <div className="p-4 text-sm text-black   space-y-4">
              <AnimatePresence mode="wait">
                {step === "name" && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <p className="font-medium text-neutral-900">
                      👋 Bienvenido a TOKUYAMA
                    </p>
                    <p>¿Cómo te llamas?</p>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                        resetIdleTimer()
                      }}
                      placeholder="Escribe tu nombre"
                      className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />

                    <button
                      onClick={handleStart}
                      className="w-full rounded-lg bg-black py-2 text-white hover:bg-blue-600 transition"
                    >
                      Continuar
                    </button>
                  </motion.div>
                )}

                {step === "menu" && (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <p className="font-medium text-black">
                      Bienvenido a Tokuyama {name}, ¿qué estás buscando?
                    </p>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => goToSection("productos")}
                        className="w-full rounded-lg border px-3 py-2 text-left hover:bg-neutral-100 transition"
                      >
                        🦷 Información de productos
                      </button>

                      <button
                        onClick={() => goToSection("eventos")}
                        className="w-full rounded-lg border px-3 py-2 text-left hover:bg-neutral-100 transition"
                      >
                        🦷 Eventos Tokuyama.
                      </button>

                      <button
                        onClick={() => goToSection("Casos")}
                        className="w-full rounded-lg border px-3 py-2 text-left hover:bg-neutral-100 transition"
                      >
                        📚 Casos clínicos
                      </button>

                      <button
                        onClick={() => goToSection("distribuidores")}
                        className="w-full rounded-lg border px-3 py-2 text-left hover:bg-neutral-100 transition"
                      >
                        📦 Distribuidores en México
                      </button>

                      <button
                        onClick={() => goToSection("contacto")}
                        className="w-full rounded-lg border px-3 py-2 text-left hover:bg-neutral-100 transition"
                      >
                        📞 Contacto profesional
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <p className="font-medium text-neutral-900">
                      ¿Sigues ahí?
                    </p>
                    <p className="text-neutral-600">
                      Aquí estoy para ayudarte cuando lo necesites.
                    </p>

                    <button
                      onClick={resumeChat}
                      className="w-full rounded-lg bg-black py-2 text-white hover:bg-neutral-800 transition"
                    >
                      Seguir
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

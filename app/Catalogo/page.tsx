"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const CATEGORIAS = [
  { id: "todos", label: "Todos" },
  { id: "resinas", label: "Resinas" },
  { id: "adhesivos", label: "Adhesivos" },
  { id: "cementos", label: "Cementos" },
  { id: "desensibilizantes", label: "Desensibilizantes" },
  { id: "rebases", label: "Rebases" },
  { id: "accesorio", label: "Accesorio" },
]

const PRODUCTOS = [
  {
    id: 1,
    nombre: "PALFIQUE UNIVERSAL BOND",
    categoria: "adhesivos",
    imagen: "/Productos/Adhesivos/UNIVERSAL BOND.jpg",
    descripcion:
      "PALFIQUE UNIVERSAL BOND es un sistema adhesivo tanto para restauraciones directas como indirectas que puede utilizarse con técnicas de autograbado, grabado selectivo y grabado total. Como adhesivo universal, PALFIQUE UNIVERSAL BOND ha sido diseñado para ser totalmente compatible con materiales compuestos de curado a la luz, autocurados y de doble curado.",
    link: "https://www.bioden.mx/collections/tokuyama-adhesivos/products/kit-palfique-universal-bond",
  },

  {
    id: 2,
    nombre: "ESTECEM PLUS",
    categoria: "cementos",
    imagen: "/Productos/ESTECEM KIT.jpg",
    descripcion:
      " Cemento resinoso adhesivo de curado dual (luz y/o autopolimerización), radiopaco y universal, diseñado para una cementación indirecta fiable y estética de coronas, puentes, carillas, inlay/onlays, y pernos en una amplia gama de materiales (cerámicas, metales, resinas).",
    link: "https://www.bioden.mx/collections/tokuyama-adhesivos/products/kit-estecem-plus-universal"

  },

  {
    id: 3,
    nombre: "ESTECEM PLUS PASTE",
    categoria: "cementos",
    imagen: "/Productos/Adhesivos/ESTECEM.jpg",
    descripcion:
      " Cemento resinoso adhesivo de curado dual (luz y/o autopolimerización), radiopaco y universal, diseñado para una cementación indirecta fiable y estética de coronas, puentes, carillas, inlay/onlays, y pernos en una amplia gama de materiales (cerámicas, metales, resinas).",
    link: "https://www.bioden.mx/collections/tokuyama-adhesivos/products/estecem-plus-paste"
  },

  {
    id: 4,
    nombre: "PALFIQUE BOND",
    categoria: "adhesivos",
    imagen: "/Productos/Adhesivos/Bond.jpg",
    descripcion:
      "Crea integridad y una capa de unión uniforme. PALFIQUE Bond emplea la tecnología de monómeros SR 3D para proporcionar una resistencia adhesiva fuerte y duradera, así como menor sensibilidad técnica y postoperatoria. Esta es la ventaja de un sistema de unión autograbado de un solo componente que emplea el monómero SR 3D.",
    link: "https://www.bioden.mx/collections/tokuyama-adhesivos/products/palfique-bond"
  },

  {
    id: 5,
    nombre: "PALFIQUE ASTERIA",
    categoria: "resinas",
    imagen: "/Productos/Resinas/Asteria.jpg",
    descripcion:
      "Palfique Asteria introduce un nuevo concepto simplificado de capas en dos pasos. Este sistema integral está compuesto por tonos mínimos; solo 7 tonos Body y 5 Enmalel cubren toda la gama de tonos dentales. El resultado estético se obtiene con el concepto simple de 2 capas de Palfique Asteria, ya que los tonos Cuerpo replican el cromo y el tono y los tonos Esmalte replican el valor.",
    link: "https://www.bioden.mx/collections/resinas-tokuyama/products/palfique-asteria"
  },

  {
    id: 6,
    nombre: "PALFIQUE LX5",
    categoria: "resinas",
    imagen: "/Productos/Resinas/PALFIQUE LX5.jpg",
    descripcion:
      "PALFIQUE LX5, que ofrece restauraciones estéticas realistas, está impregnado con nuestros rellenos esféricos Supra-Nano y diseñado por Tokuyama Dental. La resina compuesta de Tokuyama Dental es reconocida mundialmente y cuenta con una pulibilidad excepcional, una amplia gama de tonos y alta resistencia al desgaste. PALFIQUE LX5 puede cubrir todo lo que necesitas en tu práctica  .",
    link: "https://www.bioden.mx/collections/resinas-tokuyama/products/palfique-lx5"
  },

  {
    id: 7,
    nombre: "UNIVERSAL FLOW SUPER LOW",
    categoria: "resinas",
    imagen: "/Productos/Resinas/UNIVERSAL FLOW SUPER LOW.jpg",
    descripcion:
      "Universal Flow Super Low es un composite de alta viscosidad y un módulo de elasticidad balanceado. Equipado con una jeringa de 3 gramos, gracias al nuevo relleno esférico Round-Shaped” garantiza una elevada trabajabilidad y bajo estrés de contracción. Resulta ideal para distintos tipos de reconstrucciones dentales.",
    link: "https://www.bioden.mx/collections/resinas-tokuyama/products/palfique-universal-super-low-flow"
  },

  {
    id: 8,
    nombre: "UNIVERSAL FLOW MEDIUM",
    categoria: "resinas",
    imagen: "/Productos/Resinas/UNIVERSAL FLOW MEDIUM.jpg",
    descripcion:
      "Universal Flow Medium es el composite fluido de viscosidad intermedia con características únicas. Gracias a su amplio abanico cromático, con 4 tonalidades opacas de intensidad cromática creciente, este producto es muy versátil para ofrecer un amplio espectro de utilizo.",
    link: "https://www.bioden.mx/collections/resinas-tokuyama/products/palfique-universal-flow-m"
    
  },

  {
    id: 9,
    nombre: "UNIVERSAL FLOW HIGH",
    categoria: "resinas",
    imagen: "/Productos/Resinas/UNIVERSAL FLOW HIGH.jpg",
    descripcion:
      "Universal Flow High: la viscosidad ideal, Composite de elevada fluidez que ofrece excelentes propiedades de trabajabilidad y características físicas envidiables, las misma de un composite tradicional en pasta. Tecnología patentada por Tokuyama, R.A.P. technology, que brinda un tiempo de trabajo adecuado y una aumentada rapidez de polimerización en solo 10 segundos.",
    link: "https://www.bioden.mx/collections/resinas-tokuyama/products/palfique-universal-flow-high"
  },
  
  {
    id: 10,
    nombre: "UNIVERSAL ESTELITE COLOR",
    categoria: "resinas",
    imagen: "/Productos/Resinas/ESTELITE COLOR.jpg",
    descripcion:
      "Estelite Color es un tinte de baja viscosidad utilizado en la restauración dental para personalizar la estética de las piezas. Se aplica debajo o entre las capas de las restauraciones de compuestos dentales, ayudando a perfeccionar la apariencia general de las piezas. Estelite Color está disponible en 13 colores, lo que permite a los profesionales adaptar la estética de sus trabajos a diversas necesidades, como dientes antiguos o pigmentados por tratamientos médicos.",
    link: "https://www.bioden.mx/collections/resinas-tokuyama/products/estelite-color"
  },

  {
    id: 11,
    nombre: "SHIELDFORCE",
    categoria: "desensibilizantes",
    imagen: "/Productos/Desensibilizantes/ShieldForce.jpg",
    descripcion:
      "TOKUYAMA® SHIELD FORCE PLUS es un sellador protector de un solo componente y de aplicación única, curado con luz, diseñado para el tratamiento de la dentina hipersensible. TOKUYAMA® SHIELD FORCE PLUS infiltra eficazmente y sella los túbulos dentinarios expuestos para inhibir el flujo de fluido a través de ellos, lo que es la causa de la sensibilidad.",
    link: "https://www.bioden.mx/collections/tokuyama-desensibilizantes/products/shield-force"
  },

  {
    id: 12,
    nombre: "SOFTRELINERTOUGHS",
    categoria: "rebases",
    imagen: "/Productos/Rebases/softRelinerToughS.jpg",
    descripcion:
      "SOFRELINER TOUGH® S(Soft)/M(Medium) es un material de silicona con curado adicional para forro suave para la silla postiza,SOFRELINER TOUGH® S(Soft) está diseñado para usarse cuando la suavidad y durabilidad son la prioridad principal.",
    link: "https://www.bioden.mx/collections/tokuyama-rebases/products/sofreliner-tough-s"
  },

  {
    id: 13,
    nombre: "REBASE ll KIT NORMAL",
    categoria: "rebases",
    imagen: "/Productos/Rebases/Rebase II Kit Normal.png",
    descripcion:
      "Tokuyama Rebase II es un material de rebase para el consultorio dental. Sin comprometer ningún beneficio de su predecesor; Tokuso Rebase, Tokuyama Rebase II ofrece mejor capacidad de pulido, menor generación de calor para el curado dentro de la boca, resistencia mecánica superior, mejor manejo y menor olor/sabor.",
    link: "https://www.bioden.mx/collections/tokuyama-rebases/products/rebase-ii-kit-normal"
  },

  {
    id: 14,
    nombre: "Rebase II Kit Fast",
    categoria: "rebases",
    imagen: "/Productos/Rebases/Rebase II Kit Fast.png",
    descripcion:
      "TOKUYAMA® REBASE II es un material de relincha para dentaduras duras de sillón. Sin renunciar a ningún beneficio respecto a su predecesor, el Tokuso® Rebase, el Tokuyama® Rebase II ofrece mejor pulido, menor generación de calor para el curado en boca, mayores resistencias mecánicas, mejor manejo y menos olor/sabor. Se cura en 4 minutos y 30 segundos por vía intraoral. Tokuyama® Rebase II está indicado para el relining de dentaduras duras y reparaciones parciales de dentaduras.",
    link: "https://www.bioden.mx/collections/tokuyama-rebases/products/rebase-ii-kit-fast"
  },

  {
    id: 15,
    nombre: "Estelite Omega Brush",
    categoria: "accesorio",
    imagen: "/Productos/Accesorios/Estelite Omega Brush.png",
    descripcion:
      "Pinceles para el modelado exacto de composites, modelado y conformación de composites dentales: Restauraciones directas e indirectas, así como trabajos de detalle: Modelado de empastes anteriores y posteriores y carillas de composite. Trabajos finos en estructuras superficiales como fisuras o bordes, Uso en tecnología dental para el diseño de carillas, coronas, incrustaciones y recubrimientos, Ajuste de transiciones y bordes para una apariencia natural.",
    link: "https://www.bioden.mx/collections/tokuyama-accesorios/products/estelite-omega-brush"
  },

  {
    id: 16,
    nombre: "SOFTRELINERTOUGHM",
    categoria: "rebases",
    imagen: "/Productos/Rebases/softRelinerToughM.jpg",
    descripcion:
      "SOFRELINER TOUGH® S(Soft)/M (Medium) alcanza el equilibrio opcional para el profesional que requiere una gama de suavidad y durabilidad, SOFRELINER TOUGH® M(Medium) debe usarse cuando la mayor durabilidad es la prioridad. El Silicon Remover (vendido por separado) ya está disponible, que elimina fácilmente el forro de silicona de la dentadura acrílica..",
    link: "https://www.bioden.mx/collections/tokuyama-rebases/products/sofreliner-tough-m"
  },

]

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos")
  const [productoActivo, setProductoActivo] = useState<any>(null)

  const productosFiltrados =
    categoriaActiva === "todos"
      ? PRODUCTOS
      : PRODUCTOS.filter((p) => p.categoria === categoriaActiva)

  return (
    <main className="bg-neutral-100 text-black min-h-screen">

      {/* ================= OVERLAY SUPERIOR ================= */}
      <section className="relative h-[280px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/espferas.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-10 top-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-blue-800">
              Catálogo de productos
            </h1>
            <p className="mt-4 text-black text-lg">
              Te presentamos la innovación japonesa
              <br /> en productos clínicos de alta calidad.
            </p>
          </motion.div>
        </div>
        
       {/* LOGO BALSAS */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-0 left-10 z-20"
                      >
                        <Image
                          src="/logos/logo balsas.png"
                          alt="Balsas"
                          width={120}
                          height={100}
                          priority
                        />
                      </motion.div>

        {/* LOGO TOKUYAMA*/}
        <motion.div
        initial={{ opacity: 0, y: -10}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6, ease: "easeOut"}}
        className="absolute top-0 right-240 z-20"
        >
          <Image
            src="/logos/logo tokuyama.png"
            alt="Balsas"
            width={120}
            height={100}
            priority
            />

        </motion.div>

      </section>

      {/* ================= CONTENIDO ================= */}
      <section className="max-w-6xl mx-auto px-10 py-16">

        {/* ===== FILTROS ===== */}
        <div className="flex justify-start gap-8 mb-16 flex-wrap">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setCategoriaActiva(cat.id)
                setProductoActivo(null)
              }}
              className={`text-sm uppercase tracking-widest border-b-4 pb-2 transition-colors
                ${
                  categoriaActiva === cat.id
                    ? "border-blue-800 text-blue-800"
                    : "border-transparent text-neutral-400 hover:text-black"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ===== GRID GENERAL (ANIMADO) ===== */}
        <motion.div
          layout
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`grid gap-12 items-start ${
            productoActivo
              ? "grid-cols-1 lg:grid-cols-[1fr_380px]"
              : "grid-cols-1"
          }`}
        >
          {/* ===== GRID PRODUCTOS ===== */}
          <motion.div
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`grid gap-10 ${
              productoActivo
                ? "grid-cols-1 sm:grid-cols-2 justify-items-start"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 justify-items-center"
            }`}
          >
            {productosFiltrados.map((producto) => (
              <motion.div
                layout
                key={producto.id}
                onClick={() => setProductoActivo(producto)}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-md p-4 w-full max-w-[260px] cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={200}
                  height={140}
                  className="mx-auto mb-4 object-contain"
                />
                <h3 className="text-sm font-semibold text-center">
                  {producto.nombre}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* ===== TARJETA INFO DERECHA ===== */}
          <AnimatePresence>
            {productoActivo && (
              <motion.aside
                layout
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-3 h-fit sticky top-3"
              >
                <button
                  onClick={() => setProductoActivo(null)}
                  className="text-neutral-400 hover:text-black mb-8"
                >
                  ✕
                </button>
                {/* LOGO BALSAS */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-5 left-20 z-20"
                      >
                        <Image
                          src="/logos/logo balsas.png"
                          alt="Balsas"
                          width={80}
                          height={50}
                          priority
                        />
                      </motion.div>

                    {/* LOGO TOKUYAMA */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-5 right-20 z-20"
                      >
                        <Image
                          src="/logos/logo tokuyama.png"
                          alt="Balsas"
                          width={80}
                          height={50}
                          priority
                        />
                      </motion.div>
                <Image
                  src={productoActivo.imagen}
                  alt={productoActivo.nombre}
                  width={260}
                  height={180}
                  className="mx-auto mb-1 object-contain"
                />
                <h3 className="text-1xl font-semibold text-center mb-2">
                  {productoActivo.nombre}
                </h3>
                <p className="text-neutral-600 text-center text-xs leading-relaxed">
                  {productoActivo.descripcion}
                </p>

                <a
                href={productoActivo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
                 >
                <button className="w-full bg-blue-800 text-white text-sm font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  "Adquiérelo"
                </button>
              </a>

              </motion.aside>
            )}
          </AnimatePresence>

        </motion.div>
      </section>
    </main>
  )
}

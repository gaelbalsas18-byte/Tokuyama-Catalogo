import Hero from "./components/hero"
import ProductsSection from "./components/ProductsSection"
import Evento from "./components/Evento"
import CasosClinicos from "./components/CasosClinicos"
import Distribuidores from "./components/Distribuidores"
import ContactosSection from "./components/contactos/ContactosSection"
import Footer from "./components/footer"
import Chatbot from "./components/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <Hero />
            {/* PRODUCTOS */}
            <ProductsSection />

                {/*Eventos*/}
                    <Evento/>

                        {/* PRODUCTOS */}
                          <CasosClinicos />

                            {/* DISTRIBUIDORES */}
                                <Distribuidores/>

                                          {/* CONTACTO */}
                                          <ContactosSection/>  
                                                {/*footer*/}
                                                <Footer/>

      {/* CHATBOT */}
      <Chatbot />
    </main>
  )
}


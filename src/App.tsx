import { useState, useEffect } from "react"
import Card from "./components/Card"
import LinkButton from "./components/LinkButton"
import FallingSeals from "./components/FallingSeals"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [islandHovered, setIslandHovered] = useState(false)

  const images = [
    "/documents/background.jpg",
    "/documents/background2.jpg",
    "/documents/background3.jpg",
    "/documents/background4.webp",
    "/documents/background5.webp",
    "/documents/background6.webp",
    "/documents/background7.webp",
    "/documents/background8.webp",
    "/documents/background9.webp",
    "/documents/background10.webp",
    "/documents/background11.webp",
    "/documents/background12.webp",
    "/documents/background13.webp",
    
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <FallingSeals />
      <div className="min-h-screen bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white">
        

        <div
          onMouseEnter={() => setIslandHovered(true)}
          onMouseLeave={() => setIslandHovered(false)}
          className={`fixed right-6 z-50 transition-all duration-500 ease-in-out ${
            scrolled && !islandHovered ? "-top-12" : "top-6"
          }`}
        >
          <div className="flex items-center gap-4 bg-zinc-300/20 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg">
            <LinkButton link="https://www.linkedin.com/in/christian-puello-935a032b1/" icon="/icons/linkedinicon.png" />
            <LinkButton link="https://github.com/ChristianPuello" icon="/icons/github.jpg" />
            <LinkButton link="/documents/Resume (2).pdf" icon="/icons/resume.png" />
          </div>
        </div>


        
          <section 
            className="flex flex-col gap-3 py-48 px-5"
            style={{ 
              backgroundImage: "url('/tri.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
            }}
          > 

            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md scale-110" />
              <div className="absolute inset-0 rounded-full ring-2 ring-emerald-400/60" />
              <img 
                src="/documents/pfp.png" 
                className="w-48 h-48 rounded-full object-cover relative z-10"
              />
            </div>

            <h1 className="text-9xl font-bold text-zinc-200 leading-tight tracking-tight">
              Christian Arthur Puello
            </h1>

            <h2 className="text-4xl gap-3 px-5 text-zinc-200 font-normal">
              CS @ UCF | Aspiring SWE
            </h2>

            <p className="text-xl gap-3 px-5 text-zinc-200 font-normal">
              I'm Christian, a software designer. My vision is to create projects that will push the needle.
            </p>
          </section>
        

        <section id="top" className="px-8 pt-8 max-w-9xl mx-auto">
          <Hero images={images} />
        </section>

        <Sidebar />


        <section id="1" className="py-32">
        <div className="p-9 grid grid-cols-3 gap-6">
          <Card
            title="Clearcoat" 
            bodytext="All-in-one car detailing busniess solution; for clients and owners." 
            tag="Mobile/ Web App" 
            year="2026" 
            image="/documents/clearcoatlogo.png"
          />
          <Card
            title="Liftos" 
            bodytext="Mobile app workout logger + Bluetooth enabled device that allows for automatic workout logging and feedback" 
            tag="Mobile" 
            year="2026" 
            image="/documents/liftos.png"
          />

          <Card 
            title="Coming Soon" 
            bodytext="" 
            year="..."
          />

          <Card 
            title="Coming Soon" 
            bodytext=""
            year="..."
          />
          <Card 
            title="Coming Soon" 
            bodytext=""
            year="..."
          />
        </div>
        </section>
        
        <section id="2" className="py-64">
          
        </section>

        <section id="3" className="py-64">
          
        </section>

        <section id="4" className="py-64">
          
        </section>
        

        
      </div>
    </>
  )
}

export default App

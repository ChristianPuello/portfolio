import { useState, useEffect } from "react"
import Card from "./components/Card"
import LinkButton from "./components/LinkButton"
import FallingSeals from "./components/FallingSeals"
import Sidebar from "./components/Sidebar"
import Gallery from "./components/Gallery"

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [islandHovered, setIslandHovered] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style>{`
        .aurora-container {
          filter: blur(80px);
          opacity: 0.7;
        }

        .aurora {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: screen;
        }

        .aurora-1 {
          width: 80vw;
          height: 60vh;
          top: -20%;
          left: -10%;
          background: radial-gradient(ellipse, rgba(16,185,129,0.6) 0%, transparent 70%);
          animation: aurora-drift-1 12s infinite alternate ease-in-out;
        }

        .aurora-2 {
          width: 60vw;
          height: 70vh;
          top: 10%;
          right: -15%;
          background: radial-gradient(ellipse, rgba(6,182,212,0.5) 0%, transparent 70%);
          animation: aurora-drift-2 16s infinite alternate ease-in-out;
        }

        .aurora-3 {
          width: 50vw;
          height: 50vh;
          bottom: 0%;
          left: 20%;
          background: radial-gradient(ellipse, rgba(52,211,153,0.4) 0%, transparent 70%);
          animation: aurora-drift-3 10s infinite alternate ease-in-out;
        }

        .aurora-4 {
          width: 40vw;
          height: 40vh;
          top: 30%;
          left: 40%;
          background: radial-gradient(ellipse, rgba(20,184,166,0.35) 0%, transparent 70%);
          animation: aurora-drift-4 18s infinite alternate ease-in-out;
        }

        @keyframes aurora-drift-1 {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(8%, 12%) scale(1.1); }
          100% { transform: translate(-5%, 6%) scale(0.95); }
        }

        @keyframes aurora-drift-2 {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(-10%, 8%) scale(1.15); }
          100% { transform: translate(5%, -10%) scale(1.05); }
        }

        @keyframes aurora-drift-3 {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(12%, -8%) scale(1.2); }
          100% { transform: translate(-8%, 5%) scale(0.9); }
        }

        @keyframes aurora-drift-4 {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(-6%, 10%) scale(1.1); }
          100% { transform: translate(10%, -5%) scale(1.05); }
        }
      `}</style>

      <FallingSeals />

      {/* Fixed full-site aurora background */}
        <div className="fixed inset-0 z-0 overflow-hidden bg-emerald-950">
          <div className="aurora-container absolute inset-0">
            <div className="aurora aurora-1" />
            <div className="aurora aurora-2" />
            <div className="aurora aurora-3" />
            <div className="aurora aurora-4" />
          </div>
        </div>

      <div className="min-h-screen bg-transparent text-white relative z-10">

        {/* Links island - top right */}
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

        <Sidebar />

        {/* Hero section with aurora */}
        <section
          id="hero"
          className="relative flex flex-col gap-3 justify-center min-h-screen px-5"
        >

          {/* Content sits above aurora */}
          <div className="relative z-10 flex flex-col gap-3">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md scale-110" />
              <div className="absolute inset-0 rounded-full ring-2 ring-emerald-400/60" />
              <img
                src="/documents/pfp.png"
                className="w-48 h-48 rounded-full object-cover relative z-10"
              />
            </div>

            <h1 className="text-9xl font-bold text-zinc-200 leading-tight tracking-tight">
              Christian A. Puello
            </h1>

            <h2 className="text-4xl gap-3 px-5 text-zinc-200 font-normal">
              CS @ UCF | Aspiring SWE
            </h2>

            <p className="text-xl gap-3 px-5 text-zinc-200 font-normal">
              I'm Christian, a software designer. My vision is to create projects that will push the needle.
            </p>
          </div>
        </section>

       

        <section id="1" className="py-16">
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
            <Card title="Coming Soon" bodytext="" year="..." />
            <Card title="Coming Soon" bodytext="" year="..." />
            <Card title="Coming Soon" bodytext="" year="..." />
          </div>
        </section>

        <section id="2" className="" />
         <Gallery />
      </div>
    </>
  )
}

export default App
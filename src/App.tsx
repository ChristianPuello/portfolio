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
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-90 text-white">
        

        <div
          onMouseEnter={() => setIslandHovered(true)}
          onMouseLeave={() => setIslandHovered(false)}
          className={`fixed right-6 z-50 transition-all duration-500 ease-in-out ${
            scrolled && !islandHovered ? "-top-12" : "top-6"
          }`}
        >
          <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg">
            <LinkButton link="https://www.linkedin.com/in/christian-puello-935a032b1/" icon="/icons/linkedinicon.png" />
            <LinkButton link="https://github.com/ChristianPuello" icon="/icons/github.jpg" />
            <LinkButton link="/documents/Resume (2).pdf" icon="/icons/resume.png" />
          </div>
        </div>

        <section id="top" className="px-8 pt-8 max-w-9xl mx-auto">
          <Hero images={images} />
        </section>

        <Sidebar />


        <section id="1" className="py-64">
        <div className="p-9 grid grid-cols-3 gap-6">
          <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
        </div>
        </section>
        
        <section id="2" className="py-64">
          <div className="p-9 grid grid-cols-3 gap-6">
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          </div>
        </section>

        <section id="3" className="py-64">
          <div className="p-9 grid grid-cols-3 gap-6">
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          </div>
        </section>

        <section id="4" className="py-64">
          <div className="p-9 grid grid-cols-3 gap-6">
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
            <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          </div>
        </section>
        

        
      </div>
    </>
  )
}

export default App

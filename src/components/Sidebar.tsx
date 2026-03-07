import { useEffect, useState } from "react"

const sections = [
  { id: "top", label: "Home" },
  { id: "1", label: "Projects" },
  { id: "2", label: "Gallery" },
  { id: "3", label: "Skills" },
  { id: "4", label: "Contact" },
]

export default function Sidebar() {
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.1 }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed left-6 z-50 transition-all duration-500 ease-in-out ${
        scrolled && !hovered ? "-top-12" : "top-6"
      }`}
    >
      <nav className="flex items-center gap-1 bg-zinc-300/20 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`relative px-3 py-1.5 text-sm font-medium rounded-xl transition-all duration-200 ${
              active === id
                ? "bg-white/20 text-white shadow-inner"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {label}
            {active === id && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" />
            )}
          </a>
        ))}
      </nav>
    </div>
  )
}
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
  const [stuck, setStuck] = useState(false)

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
    const handleScroll = () => {
      const hero = document.getElementById("top")
      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom
        setStuck(bottom <= 60)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`z-40 transition-all duration-300 ${
        stuck
          ? "fixed top-0 left-0 right-0 bg-slate-800/80 backdrop-blur-sm shadow-lg"
          : "relative bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-center gap-8 px-8 py-3">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-sm font-medium transition-all duration-200 pb-1 ${
              active === id
                ? "text-white border-b-2 border-blue-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
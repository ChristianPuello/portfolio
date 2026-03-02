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
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
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

  return (
    <div
      className="fixed top-1/2 left-0 -translate-y-1/2 z-40 flex flex-col gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`flex items-center gap-3 py-2 pr-4 pl-3 transition-all duration-300 rounded-r-lg group
            ${active === id
              ? "bg-slate-700 border-l-2 border-blue-400"
              : "bg-slate-800 border-l-2 border-slate-600 hover:border-blue-400"
            }`}
        >
          {/* dot indicator */}
          <span
            className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300 ${
              active === id ? "bg-blue-400" : "bg-slate-500 group-hover:bg-blue-400"
            }`}
          />

          {/* label - slides in on hover */}
          <span
            className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
              active === id ? "text-white" : "text-slate-400 group-hover:text-white"
            } ${hovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0"}`}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  )
}
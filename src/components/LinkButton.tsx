import { useState } from "react"

type ButtonProps = {
  link: string
  icon: string
}

export default function LinkButton({ link, icon }: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="relative flex items-center justify-center w-10 h-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`absolute inset-0 rounded-xl bg-white/20 transition-all duration-300 ease-out ${
          hovered ? "opacity-100 scale-110" : "opacity-0 scale-75"
        }`}
      />
      <img src={icon} alt="link icon" className="w-8 h-8 relative z-10" />
    </a>
  )
}
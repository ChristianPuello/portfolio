import { useState, useEffect } from "react"

type HeroProps = {
  images: string[]
}

export default function Hero({ images }: HeroProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrent((i) => (i + 1) % images.length)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [current])

  const getOffset = (i: number) => {
    let diff = i - current
    // wrap around
    if (diff > images.length / 2) diff -= images.length
    if (diff < -images.length / 2) diff += images.length
    return diff
  }

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">

      {images.map((src, i) => {
        const offset = getOffset(i)
        const isActive = offset === 0
        const isVisible = Math.abs(offset) <= 1

        return (
          <div
            key={i}
            className="absolute h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out"
            style={{
              width: isActive ? "55%" : "25%",
              opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
              transform: `translateX(${offset * 185}%)`,
              zIndex: isActive ? 10 : 5,
            }}
          >
            <img src={src} className="w-full h-full object-cover" alt={`slide ${i}`} />
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900" />
            )}
          </div>
        )
      })}

      <button onClick={prev} className="absolute left-4 z-20 bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg text-2xl">
        ‹
      </button>

      <button onClick={next} className="absolute right-4 z-20 bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg text-2xl">
        ›
      </button>

      <div className="absolute bottom-4 z-20 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/40"}`} />
        ))}
      </div>

    </div>
  )
}
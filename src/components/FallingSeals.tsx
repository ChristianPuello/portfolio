import { useEffect, useState } from "react"

type Seal = {
  id: number
  x: number
  duration: number
  delay: number
  size: number
}

function generateSeal(id: number): Seal {
  return {
    id,
    x: Math.random() * 95,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 4,
    size: 2 + Math.random() * 2.5,
  }
}

export default function FallingSeals() {
  const [seals] = useState<Seal[]>(() =>
    Array.from({ length: 20 }, (_, i) => generateSeal(i))
  )
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // max delay (4s) + max duration (4s) = 8s
    const timer = setTimeout(() => setVisible(false), 8500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-150px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0.8;
          }
        }
      `}</style>

      {seals.map((seal) => (
        <div
          key={seal.id}
          style={{
            position: "absolute",
            top: 0,
            left: `${seal.x}%`,
            fontSize: `${seal.size}rem`,
            animation: `fall ${seal.duration}s ${seal.delay}s ease-in forwards`,
            opacity: 0,
            filter: "drop-shadow(0px 6px 8px rgba(0,0,0,0.35))",
          }}
        >
          🦭
        </div>
      ))}
    </div>
  )
}
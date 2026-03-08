import { useEffect, useRef, useState } from "react"

function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

const galleryData = [
  {
    title: "The Beginning",
    description: "Where it all started. Early days building, learning, and figuring out what I wanted to create.",
    images: [
      "/documents/background.jpg",
      "/documents/background2.jpg",
      "/documents/background3.jpg",
    ],
  },
  {
    title: "Projects & Progress",
    description: "Turning ideas into reality. Each project taught me something new about design, engineering, and persistence.",
    images: [
      "/documents/background4.webp",
      "/documents/background5.webp",
    ],
  },
  {
    title: "Getting Involved",
    description: "Late nights, hackathons, and friendships that push me to be better.",
    images: [
      "/documents/background6.webp",
      "/documents/background7.webp",
      "/documents/background8.webp",
      "/documents/background9.webp",
    ],
  },
  {
    title: "Future Plans",
    description: "The rearview mirror is only for glancing, these are the things on my horizon.",
    images: [
      "/documents/background10.webp",
      "/documents/background11.webp",
      "/documents/background12.webp",
    ],
  },
]

function ImageCluster({ images }: { images: string[] }) {
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3 w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl aspect-square">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    )
  }

  if (images.length === 3) {
    return (
      <div className="grid grid-cols-2 gap-3 w-full h-full">
        <div className="overflow-hidden rounded-2xl row-span-2">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="overflow-hidden rounded-2xl aspect-square">
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="overflow-hidden rounded-2xl aspect-square">
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    )
  }

  if (images.length === 4) {
    return (
      <div className="grid grid-cols-2 gap-3 w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl aspect-square">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    )
  }

  // fallback: single image
  return (
    <div className="overflow-hidden rounded-2xl w-full h-full">
      <img
        src={images[0]}
        alt=""
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24 flex flex-col gap-32">
      {galleryData.map((cluster, index) => {
        const { ref, visible } = useFadeInOnScroll()
        const isEven = index % 2 === 0
        return (
          <div
            key={index}
            ref={ref}
            className={`flex items-center gap-16 transition-all duration-700 ease-out
              ${isEven ? "flex-row" : "flex-row-reverse"}
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {/* Image cluster */}
            <div className="w-1/2 min-h-[400px]">
              <ImageCluster images={cluster.images} />
            </div>

            {/* Text */}
            <div className={`w-1/2 flex flex-col gap-4 ${isEven ? "items-start text-left" : "items-end text-right"}`}>
              <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-5xl font-bold text-zinc-100 leading-tight">
                {cluster.title}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                {cluster.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}  
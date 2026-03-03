type CardProps = {
  title: string
  bodytext: string
  tag?: string
  year?: string
  image?: string
}

function Card({ title, bodytext, tag = "Project", year = "2024", image }: CardProps) {
  return (
    <div
      className="group relative flex flex-col justify-between h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
      style={image ? { backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      {/* deep gradient overlay — heavy at bottom, light at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* hover shimmer border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-500" />

      {/* top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">

        {/* top row */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {tag}
          </span>
          <span className="text-[10px] font-mono text-white/30 tracking-widest">
            {year}
          </span>
        </div>

        {/* bottom content */}
        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
              {bodytext}
            </p>
          </div>

          {/* bottom row */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs font-semibold text-white/40 tracking-wide uppercase">
              View Project
            </span>
            <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 text-white text-sm">
              →
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
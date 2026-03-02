type CardProps = {
  title: string
  bodytext: string
  tag?: string
  year?: string
}

function Card({ title, bodytext, tag = "Project", year = "2024" }: CardProps) {
  return (
    <div className="group relative flex flex-col justify-between h-80 rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 overflow-hidden cursor-pointer transition-all duration-300 hover:border-slate-500/80 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* background glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />

      {/* top row */}
      <div className="flex items-start justify-between">
        <span className="text-xs font-mono text-blue-400/80 tracking-widest uppercase">
          {tag}
        </span>
        <span className="text-xs font-mono text-slate-600">
          {year}
        </span>
      </div>

      {/* middle content */}
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-white tracking-tight leading-snug">
          {title}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
          {bodytext}
        </p>
      </div>

      {/* bottom row */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
        <span className="text-xs text-slate-500">View Project</span>
        <div className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-blue-400 group-hover:text-blue-400 transition-all duration-200 text-slate-500 text-xs">
          →
        </div>
      </div>

    </div>
  )
}

export default Card
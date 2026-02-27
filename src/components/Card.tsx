type cardProps = {
    title: string
    bodytext: string

}

function Card({ title, bodytext }: cardProps){
    return(
        
        <div className="max-w-sm rounded-2xl bg-gray-800 p-6 shadow-lg border">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-gray-400">
            {bodytext}
          </p>

          <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
            View Project
          </button>
        </div>
    )
}

export default Card
import landscapeImg from "../assets/background2.jpg" // your image path

export default function Hero() {
  return (
    <div className="relative w-full h-96">
      
      {/* Background image */}
      <img
        src={landscapeImg}
        alt="landscape"
        className="w-full h-full object-cover"
      />

      {/* Welcome text */}
      <div className="absolute inset-0 flex flex-col items-left justify-center">
        <h2 className=" p-6 text-white text-4xl font-bold tracking-wide drop-shadow-lg">
          Welcome
        </h2>
        <p className="p-6 text-white text-lg mt-2 drop-shadow-md">
          Some subtitle here
        </p>
      </div>

      {/* Fade to your bg color at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900" />

    </div>
  )
}
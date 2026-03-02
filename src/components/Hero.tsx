import landscapeImg from "../assets/background3.jpg" // your image path

export default function Hero() {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-3xl">
      
      
      <img
        src={landscapeImg}
        alt="landscape"
        className="w-full h-full object-cover rounded-3xl drop shadow-2xl"
      />

      <div className="absolute inset-0 flex flex-col items-left justify-center drop-shadow-lg">
        <h2 className=" text-white text-4xl font-bold tracking-wide drop-shadow-lg pl-5">
          Welcome To Christian's Portfolio
        </h2>
        <p className=" text-white text-lg mt-2 drop-shadow-md pl-6">
          
        </p>
      </div>
    
    </div>
  )
}
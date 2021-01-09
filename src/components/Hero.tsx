import Logo from "./Logo";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-red to-red-dark">
      <div className="container mx-auto px-4 md:px-8 py-16 xl:py-24 2xl:py-32">
        <div className="flex flex-wrap items-center">
          <Logo
            strokeWidth={1.5}
            className={`
              bg-white text-red transform -rotate-3
                 w-8     h-8     rounded-lg    mr-2
              sm:w-16 sm:h-16 sm:rounded-xl sm:mr-3 sm:translate-y-1
              md:w-24 md:h-24               md:mr-4
            `}
          />
          <div
            className={`
              text-white font-extrabold break-all
                 text-2xl
              sm:text-5xl
              md:text-7xl
            `}
          >mobile.cologne<span className="text-white text-opacity-60">/meetup</span></div>
        </div>
        <div className={`
          text-white text-opacity-60 font-extrabold break-words
             text-2xl
          sm:text-4xl
          md:text-6xl
          lg:text-7xl
        `}>
          community for app development
        </div>
      </div>
    </div>
  )
}
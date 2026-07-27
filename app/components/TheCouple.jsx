"use client";
import "swiper/css";
import "swiper/css/pagination";

export default function TheCouple() {
  const cards = [
    {
      icon: "/assets/accom.png",
      title: "Accommodation",
      desc: "Comfortable accommodation has been arranged for all our guests.",
    },
    {
      icon: "/assets/food.png",
      title: "Food",
      desc: "Delicious breakfast, lunch, dinner, and refreshments will be served throughout the celebrations.",
    },
    {
      icon: "/assets/travel.png",
      title: "Travel",
      desc: "Travel arrangements to and from the venue have been organized for your convenience.",
    },
  ];
  return (
    <>
      <div className="bg-[url('/assets/respo_bg_two.webp')] md:bg-[url('/assets/varuncouple_bg2.png')] bg-cover bg-no-repeat">
        <div className="h-689 md:h-500 lg:h-700 3xl:h-800">
          <h1 className="parisienne-regular font-medium text-base md:text-5xl lg:text-7xl text-center text-[#C26F02] lg:pt-40 pt-20">
            The Couple
          </h1>

          <div className="flex justify-center items-center mt-22">
            <div className="relative w-[340px] h-[300px] lg:w-[650px] lg:h-[520px]">
              {/* Love Text */}
              <img
                src="/assets/love.png"
                alt="Love"
                className="absolute top-0 left-0 w-[170px] lg:w-[330px] -rotate-6 z-30"
              />

              {/* Top Right */}
              <img
                src="/assets/thecouple3.png"
                alt=""
                className="absolute top-8 right-2 lg:top-12 lg:right-18
      w-[120px] lg:w-[250px] 
      rotate-1 border-4 border-white shadow-lg z-20"
              />

              {/* Left */}
              <img
                src="/assets/thecouple1.png"
                alt=""
                className="absolute top-18 left-6 lg:top-40 lg:left-10
      w-[140px] lg:w-[250px]
      -rotate-2 border-4 border-white shadow-lg z-10"
              />

              {/* Bottom Left */}
              <img
                src="/assets/thecouple2.png"
                alt=""
                className="absolute bottom-5 left-10 lg:bottom-8 lg:left-16
      w-[160px] lg:w-[270px]
      rotate-1 border-4 border-white shadow-lg z-30"
              />

              {/* Bottom Right */}
              <img
                src="/assets/thecouple4.png"
                alt=""
                className="absolute bottom-0 right-12 lg:bottom-2 lg:right-26
      w-[140px] lg:w-[240px]
      rotate-4 border-4 border-white shadow-lg z-20"
              />

              {/* Flower */}
              <img
                src="/assets/flower-outline.png"
                alt=""
                className="absolute bottom-0 right-0
      w-[80px] lg:w-[140px]
      opacity-70"
              />
            </div>
          </div>

          <h1 className="parisienne-regular font-medium text-base md:text-5xl lg:text-7xl text-center text-[#C26F02] lg:pt-40 pt-20">
            For Our Guests
          </h1>

          <h2 className="eb-garamond font-normal text-xs md:text-sm lg:text-[26px] text-center text-[#C26F02] px-3 md:px-17 lg:px-51 3xl:px-153 mt-12 lg:mt-14 leading-5 md:leading-tight">
            We look forward to celebrating this special occasion with you. Your
            presence and blessings mean the world to us!
          </h2>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-20">
            {cards.map((item, index) => (
              <div
                key={index}
                className="relative w-[220px] h-[300px] lg:w-[270px] lg:h-[370px]"
              >
                {/* Card Border */}
                <img
                  src="/assets/frame.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center px-8 py-8">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#C57A08] flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[#C57A08] text-2xl lg:text-3xl font-[Cormorant_Garamond]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-center text-[#C57A08] text-xs lg:text-sm leading-relaxed max-w-[170px]">
                    {item.desc}
                  </p>

                  {/* Bottom Ornament */}
                  <img
                    src="/assets/card-ornament.png"
                    alt=""
                    className="mt-auto w-24 lg:w-32"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <div className="relative w-[260px] h-[280px] lg:w-[570px] lg:h-[690px] md:w-[530px] md:h-[530px]">
              {/* Couple Illustration */}
              <img
                src="/assets/rsvp_image.png"
                alt="Couple"
                className="w-[260px] h-[280px] md:w-[530px] md:h-[530px] lg:w-[570px] lg:h-[690px]"
              />

              {/* Heart Content */}
              <div className="absolute top-[26%] md:top-[24%] left-1/2 -translate-x-1/2 md:w-[200px] w-[120px] lg:w-[320px] text-center text-[#8B4302]">
                <p className="text-[10px] md:text-xl lg:text-3xl leading-tight font-semibold font-[Cormorant_Garamond]">
                  Awaiting the Pleasure of Your Company
                </p>
                <button className="mt-2 px-3 py-1 text-[9px] lg:text-xs rounded-full  hover:text-white transition md:text-[16px] 3xl:text-xl font-[Cormorant_Garamond]">
                  Click the link to RSVP
                </button>
                <p className="mt-2 text-[8px] md:text-[16px] tracking-[2px] font-semibold text-xl font-[Cormorant_Garamond]">
                  VARUN & YUVASHRI
                </p>
                <div className="w-12 h-px bg-[#E27500] mx-auto my-2"></div>
                <p className="text-[8px] lg:text-[16px] md:text-[14px] font-[Cormorant_Garamond] text-[#E27500] font-semibold">7704724319</p>
                  <p className="text-[8px] lg:text-[16px] md:text-[14px]  font-[Cormorant_Garamond] text-[#E27500] font-semibold">&</p>
                <p className="text-[8px] lg:text-[16px] md:text-[14px]  font-[Cormorant_Garamond] text-[#E27500] font-semibold">9156055441</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

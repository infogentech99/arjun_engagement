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
      <div className="bg-[url('/assets/varuncouplemobile_bg.png')] md:bg-[url('/assets/varuncouple_bg2.png')] bg-cover bg-no-repeat">
        <div className="h-609 md:h-500 lg:h-900 3xl:h-950">
          {/* <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-center text-[#C26F02] lg:pt-40 pt-20">
            The Couple
          </h1> */}
          <div className="text-center">
            <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-[#C26F02] lg:pt-40 pt-20">
              The Couple
            </h1>

            <img
              src="/assets/underline.png"
              alt="underline"
              className="mx-auto mt-2 w-[200px] md:w-32 md:w-[350px] md:mt-7"
            />
          </div>

          <div className="flex justify-center items-center mt-22">
            <div className="relative w-85 h-75 lg:w-162.5 lg:h-130">
              {/* Love Text */}
              <img
                src="/assets/love.png"
                alt="Love"
                className="absolute top-0 left-0 w-42.5 lg:w-82.5 -rotate-6 z-30 3xl:w-100 3xl:-left-30"
              />

              {/* Top Right */}
              <img
                src="/assets/thecouplev4.png"
                alt=""
                className="absolute top-8 right-5 lg:top-12 lg:right-18 3xl:right-0 md:right-12 w-35 md:w-30 lg:w-80 3xl:w-100 rotate-1 shadow-lg z-20"
              />

              {/* Left */}
              <img
                src="/assets/thecouplev2.png"
                alt=""
                className="absolute top-18 left-6 lg:top-40 lg:-left-10  3xl:-left-35
      w-35 lg:w-80 3xl:w-100
      -rotate-2  shadow-lg z-10"
              />

              {/* Bottom Left */}
              <img
                src="/assets/thecouplev1.png"
                alt=""
                className="absolute bottom-5 left-10 lg:-bottom-10  3xl:-bottom-40 lg:left-16 3xl:-left-20
      w-40 lg:w-80 3xl:w-100
      rotate-1 shadow-lg z-30"
              />

              {/* Bottom Right */}
              <img
                src="/assets/thecouplev3.png"
                alt=""
                className="absolute bottom-0 right-12 lg:bottom-2 lg:right-16 3xl:right-6 lg:top-55 3xl:top-75
      w-35 lg:w-70 3xl:w-85
      rotate-4 shadow-lg z-20"
              />

              {/* Flower */}
              <img
                src="/assets/couple_flower.png"
                alt=""
                className="absolute bottom-0 lg:-right-35 -right-20 3xl:-right-45 3xl:top-90
      w-45 lg:w-75
      opacity-70"
              />
            </div>
          </div>

          {/* <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-center text-[#C26F02] lg:pt-40 pt-20">
            For Our Guests
          </h1> */}

<div className="flex lg:gap-20 justify-center mt-20 gap-8 3xl:pt-100 lg:pt-40">
    <div>
 <img
              src="/assets/left_flower.png"
              alt="underline"
              className="mx-auto mt-2 w-14 md:w-32 lg:w-[250px] md:mt-7 "
            />
    </div>

 <div className="text-center">
            <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-[#C26F02] lg:pt-40 md:pt-20 pt-5 ">
              For Our Guests
            </h1>

            <img
              src="/assets/underline.png"
              alt="underline"
              className="mx-auto mt-2 w-50 md:w-50 lg:w-[350px] md:mt-7"
            />
          </div>
    <div>
 <img
              src="/assets/right_flower.png"
              alt="underline"
              className="mx-auto mt-2 w-14 md:w-32 lg:w-[250px] md:mt-7"
            />
    </div>
</div>



         
          <h2 className="eb-garamond font-normal text-xs md:text-sm lg:text-[26px] text-center text-[#C26F02] px-3 md:px-17 lg:px-51 3xl:px-153 mt-8 lg:mt-14 leading-5 md:leading-tight">
            We look forward to celebrating this special occasion with you. Your
            presence and blessings mean the world to us!
          </h2>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-20">
            {cards.map((item, index) => (
              <div
                key={index}
                className="relative w-55 h-75 lg:w-90 lg:h-130"
              >
                <img
                  src="/assets/frame.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                />

                <div className="absolute inset-0 flex flex-col items-center px-8 py-8 lg:pt-18">
                  {/* <div className="w-16 h-16 lg:w-30 lg:h-30 rounded-full border-4 border-double border-[#C57A08] flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 h-8 lg:w-18 lg:h-18 object-contain"
                    />
                  </div> */}
                  <div className="w-16 h-16 lg:w-30 lg:h-30 rounded-full border-2 border-[#C57A08] p-[3px]">
  <div className="w-full h-full rounded-full border border-[#C57A08] flex items-center justify-center">
   <img
                      src={item.icon}
                      alt=""
                      className="w-8 h-8 lg:w-18 lg:h-18 object-contain"
                    />
  </div>
</div>

                  <h3 className="mt-6 text-[#C57A08] text-2xl lg:text-3xl font-[Cormorant_Garamond]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-center text-[#C57A08] text-xs lg:text-[14px] leading-relaxed max-w-42.5">
                    {item.desc}
                  </p>

                  {/* <img
                    src="/assets/card-ornament.png"
                    alt=""
                    className="mt-auto w-24 lg:w-32"
                  /> */}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20 md:mt-30 lg:mt-40 3xl:mt-50">
            <div className="relative w-88 h-95 lg:w-142.5 lg:h-172.5 md:w-132.5 md:h-132.5">
              {/* Couple Illustration */}
              <img
                src="/assets/rsvp_image.png"
                alt="Couple"
                className="w-88 h-95 md:w-132.5 md:h-132.5 lg:w-142.5 lg:h-172.5"
              />

              {/* Heart Content */}
              <div className="absolute top-[26%] md:top-[24%] left-1/2 -translate-x-1/2 md:w-50 w-37.5 lg:w-[320px] text-center text-[#8B4302]">
                <p className="text-[14px] md:text-xl lg:text-3xl leading-tight font-semibold font-[Cormorant_Garamond] md:mt-6 mt-2">
                  Awaiting the Pleasure of Your Company
                </p>
              <button className="mt-2 px-3 py-1 text-[9px] lg:text-xs rounded-full md:text-[16px] 3xl:text-[16px] font-[Cormorant_Garamond]">
                  Click the <a
                  href="https://wa.me/918888888888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[8px] md:text-[14px] lg:text-[16px] font-[Cormorant_Garamond] text-[#E27500] font-semibold hover:underline"
                > link</a> to RSVP
                </button>
                <p className="mt-2 text-[8px] md:text-[16px] tracking-[2px] font-semibold text-xl font-[Cormorant_Garamond]">
                  Arjun Reddy
                </p>
                <div className="w-12 bg-[#E27500] mx-auto md:my-2 my-0"></div>
                {/* <p className="text-[8px] lg:text-[16px] md:text-[14px] font-[Cormorant_Garamond] text-[#E27500] font-semibold">7704724319</p>
                  <p className="text-[8px] lg:text-[16px] md:text-[14px]  font-[Cormorant_Garamond] text-[#E27500] font-semibold">&</p>
                <p className="text-[8px] lg:text-[16px] md:text-[14px]  font-[Cormorant_Garamond] text-[#E27500] font-semibold">9156055441</p> */}
                {/* <a
                  href="https://wa.me/9176642399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[8px] md:text-[14px] lg:text-[16px] font-[Cormorant_Garamond] text-[#E27500] font-semibold hover:underline"
                > */}
                <p className="text-[8px] md:text-[14px] lg:text-[16px] font-[Cormorant_Garamond] font-semibold">
                  9188888888
                </p>

                {/* <p className="text-[8px] md:text-[14px] lg:text-[16px] font-[Cormorant_Garamond] text-[#E27500] font-semibold">
                  &
                </p> */}

                {/* <a
                  href="https://wa.me/9150688441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[8px] md:text-[14px] lg:text-[16px] font-[Cormorant_Garamond] text-[#E27500] font-semibold hover:underline"
                >
                  9150688441
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

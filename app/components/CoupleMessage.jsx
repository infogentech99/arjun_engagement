"use client";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {
  return (
    <>
      <div className="bg-[url('/assets/story_mobilebg2.png')] md:bg-[url('/assets/story_desktopbg.png')] bg-cover bg-no-repeat">
        <div className="h-230 md:h-150 lg:h-280 3xl:h-350">
          {/* <div className="text-center">
<h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-center text-[#C26F02] lg:pt-40 pt-20">
            Our Story
           
          </h1>
          <img
              src="/assets/underline.png"
              alt="underline"
              className=""
            />

          </div> */}
          <div className="text-center">
  <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-[#C26F02] lg:pt-40 pt-20">
    Our Story
  </h1>

  <img
    src="/assets/underline.png"
    alt="underline"
    className="mx-auto mt-2 w-[200px] md:w-32 md:w-[350px] md:mt-7"
  />
</div>
          <h2 className="eb-garamond font-normal text-xs md:text-sm lg:text-[22px] 3xl:text-[26px] text-center text-[#C26F02] px-3 md:px-17 lg:px-51 3xl:px-103 mt-18 lg:mt-24 leading-5 md:leading-tight">
            Ours is a beautiful arranged marriage that brought two families and
            two hearts together. What began with a simple introduction soon
            blossomed into a bond of trust, respect, and understanding. With
            every conversation, we discovered that we were meant for each other.
            Surrounded by the love and blessings of our families, we are excited
            to begin this new chapter together. We warmly invite you to
            celebrate our special day and bless us on our journey ahead.
          </h2>

          <div className="flex justify-center items-center 3xl:mt-22 lg:mt-32 md:mt-22 mt-20">
            <img
              src="/assets/couple_varun1.png"
              alt="weather"
              className="w-50 h-50 md:w-50 md:h-50 lg:w-100 lg:h-100 -rotate-5 z-10"
            />
            <img
              src="/assets/couple_varun2.png"
              alt="weather"
              className="w-50 h-50 md:w-50 md:h-50 lg:w-100 lg:h-100  -rotate-5 -ml-10 z-0"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-[url('/assets/event_desktopbg2.png')] bg-cover bg-no-repeat"> */}
      <div className="relative bg-[url('/assets/event_desktopbg2.png')] bg-cover bg-no-repeat pb-30">
        {/* Left Flower */}
        <img
          src="/assets/eventleft_flower.png"
          alt=""
          className="absolute left-0 bottom-0 w-32 md:w-40 lg:w-90 3xl:w-100 z-0 pointer-events-none"
        />

        {/* Right Flower */}
        <img
          src="/assets/eventright_flower.png"
          alt=""
          className="absolute right-0 bottom-0 w-32 md:w-40 lg:w-90 3xl:w-100 z-0 pointer-events-none"
        />
        <div className="h-180 md:h-180 lg:h-250 flex-row justify-center items-center">
          {/* <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-center text-[#C26F02] lg:pt-40 pt-20">
            Our Events
          </h1> */}


          <div className="text-center">
  <h1 className="parisienne-regular font-medium text-4xl md:text-5xl lg:text-7xl text-[#C26F02] lg:pt-40 pt-20">
    Our Events
  </h1>

  <img
    src="/assets/underline.png"
    alt="underline"
    className="mx-auto mt-2 w-[200px] md:w-32 md:w-[350px] md:mt-7"
  />
</div>

          <div className="flex justify-center items-center mt-26">
            <div className="relative w-70 h-92 md:w-100 md:h-100 lg:w-125 lg:h-140 3xl:w-140 3xl:h-120 -rotate-3">
              {/* Background Card */}
              <img
                src="/assets/card1.png"
                alt="Wedding Card"
                className="w-70 h-92 md:w-100 md:h-100 lg:w-125 lg:h-140 3xl:w-120 3xl:h-140"
              />

              {/* Card Content */}
              <div className="absolute inset-0 px-[10%] py-[12%] text-[#C57A08] font-serif">
                <div className="grid md:grid-cols-2 3xl:grid-cols-2 lg:grid-cols-[70%_30%]  grid-cols-[70%_30%]  gap-0">
                  {/* Reception */}
                  <div>
                    <img
                      src="/assets/rece.png"
                      alt=""
                      className="w-13 h-13 mb-2"
                    />

                    <h3 className="text-xl md:text-3xl lg:text-4xl leading-none">
                     Reception
                    </h3>

                    <p className="mt-2 text-[10px] lg:text-[16px]">
                      Thursday, 3rd September 2026
                    </p>

                    <p className="text-[10px] lg:text-[16px]">
                      6:30 pm onwards
                    </p>
                  </div>

                  {/* Wedding */}
                  <div className="">
                    {/* <h3 className="text-xl  md:text-3xl lg:text-4xl leading-none">
                      Wedding
                    </h3>

                    <p className="mt-2 text-[10px] lg:text-[17px]">
                      Sunday, 30th August 2026
                    </p>

                    <p className="text-[10px] lg:text-[16px]">
                      7:30 am onwards
                    </p> */}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#C57A08] my-7 lg:my-10 3xl:w-90 w-50 md:w-80 lg:w-90"></div>

                {/* Bottom */}
                <div className="grid md:grid-cols-2  3xl:grid-cols-2 grid-cols-[60%_40%] lg:grid-cols-[60%_40%] items-end mt-5 lg:mt-5">
                  {/* Venue */}
                  <div>
                    <h3 className="text-xl lg:text-4xl md:text-3xl leading-none">
                      Venue
                    </h3>

                    <p className="mt-2 text-[10px] lg:text-[16px] leading-relaxed">
                     The Leela Palace Chennai,
                     <br/>
                     MRC Nagar, Chennai
                    </p>
                  </div>

                  {/* QR */}
                  <div className="flex flex-col items-center ">
                    <img
                      src="/assets/chennai_qr.png"
                      alt="QR Code"
                      className="w-16 h-16 lg:w-24 lg:h-24 border border-[#C57A08]"
                    />

                    {/* <p className="mt-1 text-[8px] lg:text-sm underline">
                      Scan to get directions
                    </p> */}
                    <a
                      href="https://maps.app.goo.gl/awjQk7T1iqSKKmx97"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-[8px] lg:text-sm underline text-[#C57A08] transition"
                    >
                      Scan to get directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

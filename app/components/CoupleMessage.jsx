"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {
    // const TARGET_DATE = new Date("2026-10-12").getTime();
    // const [timeLeft, setTimeLeft] = useState({
    //     days: 0,
    //     hours: 0,
    //     minutes: 0,
    // });

    // useEffect(() => {
    //     const updateCountdown = () => {
    //         const now = new Date().getTime();
    //         const diff = TARGET_DATE - now;
    //         if (diff <= 0) {
    //             setTimeLeft({ days: 30, hours: 10, minutes: 30 });
    //             return;
    //         }
    //         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor(
    //             (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //         );
    //         const minutes = Math.floor(
    //             (diff % (1000 * 60 * 60)) / (1000 * 60)
    //         );

    //         setTimeLeft({ days, hours, minutes });
    //     };

    //     updateCountdown(); // first run
    //     const interval = setInterval(updateCountdown, 60000); // every minute

    //     return () => clearInterval(interval);
    // }, []);


    return (

        <div className="bg-[url('/assets/respo_bg_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat">
             <div className="h-689 md:h-685 lg:h-1050 3xl:h-1367">
                <h1 className="eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#FFD74B] lg:pt-40 pt-20">Our Story</h1>
                <h2 className="parisienne-regular font-normal text-xs md:text-sm lg:text-[26px] text-center text-[#FFD74B] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
                    Ours is a beautiful arranged marriage that brought two families and two hearts together.
                    What began with a simple introduction soon blossomed into a bond of trust, respect, and understanding.
                    With every conversation, we discovered that we were meant for each other. Surrounded by the love and blessings
                    of our families, we are excited to begin this new chapter together. We warmly invite you to celebrate our special
                    day and bless us on our journey ahead.
                </h2>
                
                <div>

                </div>

              <div className=" h-100 lg:h-180 flex justify-center gap-0 items-center md:mt-40 lg:mt-80 3xl:mt-210 md:pr-5 lg:pr-0 3xl:pr-30">
                <div className="bg-[url('/assets/RSVP.webp')] w-65 h-65 md:w-100 md:h-100 lg:w-150 lg:h-150 bg-contain bg-no-repeat">
                <h2 className="eb-garamond font-medium text-center text-xl md:text-3xl lg:text-[36px] text-[#8B4302] pt-15 md:pt-25 lg:pt-40 3xl:pt-150 leading-5 md:leading-8 lg:leading-12">
                  Awaiting the <br /> Pleasure of <br/> Your Company
                </h2>
                <div className="flex flex-col justify-center items-center mt-2 md:not-first:mt-4">
                <h2 className="eb-garamond font-semibold text-xs md:text-sm lg:text-[20px] text-[#8B4302]">
                  Click the link to RSVP
                </h2>
                <h2 className=" text-[#8B4302]">VARUN & YUVASHRI</h2>
                <h2>9176642399 <br /> & <br /> 9150688441</h2>
                </div>
              </div>
            </div>

          <h1 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFD74B] pt-10 md:pt-35 lg:pt-65 3xl:pt-320 leading-tight">
            A Guide For <br /> Guests
          </h1>
          
          <div className="flex justify-center mt-10 md:mt-20 pb-10 md:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-20 lg:gap-0 3xl:gap-60">
              <div className=" flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/weather.webp"
                  alt="weather"
                  className="w-31 h-25 md:w-24 md:h-22 lg:w-33 lg:h-26"
                />
                <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                  Weather
                </h2>
                <p className="eb-garamond font-normal text-sm lg:text-xl text-[#FFD74B] mt-1 md:leading-5">
                  A delighful day awaits <br /> with pleasant weather <br /> and mild temperatures.
                </p>
              </div>
              <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFD74B] lg:my-28" />
              <div className=" flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/staff.webp"
                  alt="drive"
                  className="w-28 h-35 md:w-17 md:h-23 lg:w-21 lg:h-27"
                />
                <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                  Staff
                </h2>
                <p className="eb-garamond font-normal text-sm lg:text-xl md:leading-5 text-[#FFD74B] mt-1">
                  For those traveling from afar, <br /> Royal Orchid Suites offers a <br /> comfortable stay nearby.
                </p>
              </div>
              <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFD74B] lg:my-28" />
              <div className=" flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/parking.webp"
                  alt="car"
                  className="w-31 h-25 md:w-26 md:h-23 lg:w-30 lg:h-27"
                />
                <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                  Parking
                </h2>
                <p className="eb-garamond font-normal text-sm lg:text-xl md:leading-5 text-[#FFD74B] mt-1">
                  Guests can enjoy hassle <br /> free parking facilities <br /> available at the venue.
                </p>
              </div>
            </div>
          </div>

          <h2 className="eb-garamond font-medium text-xl md:text-xl lg:text-[28px] text-center text-[#FFD74B] px-4 md:px-20 lg:px-56 3xl:px-107 pt-0 md:pt-22 lg:pt-40 3xl:pt-46 mt-2 lg:mt-4 lg:leading-tight">
            Your presence means the world to us. To make your experience <br className="hidden md:block" />
            effortless and enjoyable, we've gathered a few useful details below.
          </h2>             

            {/* <div className="flex flex-col h-50 md:h-89 lg:h-200 3xl:h-210 md:gap-3 lg:gap-8 3xl:gap-8 items-center text-center">
              <h2 className="parisienne-regular font-normal text-2xl md:text-4xl lg:text-6xl text-center text-[#FFD74B] pt-40 md:pt-60 lg:pt-75 3xl:pt-55">The Journey Begins</h2>
              <p className="eb-garamond font-medium text-xs md:text-xl lg:text-[28px] text-[#FFD74B] mt-4 text-center px-6 md:px-25 lg:px-65 3xl:px-120">
                Surrounded by family and friends, we can't wait to celebrate <br /> this beautiful moment with you.
              </p> 
              <hr className="w-42 md:w-66 lg:w-94 border lg:border-2 border-[#FFD74B] my-2 md:my-4 lg:my-4" />
              <h2 className="eb-garamond font-normal text-2xl md:text-5xl lg:text-[80px] text-center text-[#FFD74B]"> {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M</h2>
                    
              <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-0">
                  <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.webp" alt="icon" className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12"/></a>
                       
              </div>
              <p className="eb-garamond font-normal text-xs md:text-sm lg:text-base text-[#FFD74B] mt-2 md:mt-0 text-center">
                  © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
            </div> */}

            </div>
        </div>

    );
}
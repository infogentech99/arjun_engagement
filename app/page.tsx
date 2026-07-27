"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";
import CoupleMessage from "@/app/components/CoupleMessage";
// import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/flower_petals.webp"
      alt="petal"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  const TARGET_DATE = new Date("2026-10-12").getTime();
      const [timeLeft, setTimeLeft] = useState({
          days: 0,
          hours: 0,
          minutes: 0,
      });
  
      useEffect(() => {
          const updateCountdown = () => {
              const now = new Date().getTime();
              const diff = TARGET_DATE - now;
              if (diff <= 0) {
                  setTimeLeft({ days: 30, hours: 10, minutes: 30, });
                  return;
              }
              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
              const hours = Math.floor(
                  (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              const minutes = Math.floor(
                  (diff % (1000 * 60 * 60)) / (1000 * 60)
              );
  
              setTimeLeft({ days, hours, minutes, });
          };
  
          updateCountdown(); // first run
          const interval = setInterval(updateCountdown, 60000); // every minute
  
          return () => clearInterval(interval);
      }, []);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline />

      {/* hero section */}
      <div className=" bg-[url('/assets/background.webp')] md:bg-[url('/assets/background.webp')] 3xl:bg-[url('/assets/background.webp')]
                       bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden">
        
        <RoseHeroTemp />

        <div className="pt-27 md:pt-53 lg:pt-70 3xl:pt-200 relative z-10">
          <h2 className="text-[#69301B] text-center leading-tight text-xl md:text-5xl lg:text-[52px] pb-0
                          md:pb-350 lg:pb-105 3xl:pb-550 flex flex-col items-center">
            <span className="parisienne-regular">Varun Prasad</span>
            <span className="jacques-francois text-xs md:text-2xl lg:text-[28px] tracking-widest">WEDS</span>
            <span className="parisienne-regular">Yuvashri</span>
          </h2>

          <div className="flex flex-col justify-center items-center mt-50 lg:mt-20 pb-60 lg:pb-60">
          <h2 className="eb-garamond font-medium text-xs md:text-xs lg:text-base text-center text-[#C26F02]">COUNTDOWN TO OUR BIG DAY</h2>
          <hr className="w-42 md:w-66 lg:w-64 border lg:border-2 border-[#C26F02] my-0 md:my-4 lg:my-4" />
          <h2 className="eb-garamond font-normal flex text-xs md:text-5xl lg:text-xl text-center text-[#C26F02] gap-6"> 
            <span> {timeLeft.days} <br /> DAYS </span>   
            <span> {timeLeft.hours} <br /> HOURS </span> 
            <span> {timeLeft.minutes} <br /> MINUTES </span> 
          </h2>
          </div>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-50 pt-0">
            <h2 className="eb-garamond font-medium text-[#C26F02] text-xs md:text-xl lg:text-[26px] md:pt-8">
              With the heavenly blessings of <br /> Mrs. Jeeva Ravi and Mr. Ravi Srinivasan.
            </h2>

            <hr className="w-16 lg:w-24 border-[#C26F02] lg:border-2 my-0 md:my-4" />
            <h2 className="eb-garamond font-medium text-[#C26F02] text-xs md:text-xl lg:text-[26px]">
              Mrs. Jamunarani R and Mr. Ravi G
            </h2>
          </div>

          <div className="mt-8 text-center pb-40">
            <h2 className="eb-garamond font-medium text-[#C26F02] text-3xl md:text-5xl lg:text-[64px] leading-tight lg:tracking-wide tracking-wider">
              INVITE
            </h2>

            <p className="eb-garamond font-medium text-[#C26F02] text-xs md:text-xl lg:text-[26px] mt-6">
              With immense pleasure cordially invite you to the auspicious wedding ceremony of
            </p>

            <h2 className="eb-garamond font-medium text-[#C26F02] text-center mt-6 md:mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              DR. YUVASHRI
            </h2>

            <h2 className="eb-garamond font-medium text-[#C26F02] text-center mt-4 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="eb-garamond font-medium text-[#C26F02] text-center lg:mt-10 mt-0 text-xl md:text-3xl lg:text-5xl leading-tight">
                & </span>   <br /> VARUN PRASAD MBA
            </h2>
          </div>
          
        </div>
      </div>

      <CoupleMessage />

      <div className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
        <div className="h-253 md:h-179 lg:h-330 3xl:h-421 flex flex-col items-center relative">
          <img src="/assets/Couple_Logo.webp" alt="logo" width={250} height={300} className="absolute top-50 w-30 h-30 md:top-41 md:w-41 md:h-40 lg:top-84 lg:w-72 lg:h-58 3xl:top-118" />
        </div>
      </div>

      {/* <MarriageCountdown /> */}
    </>
  );
}

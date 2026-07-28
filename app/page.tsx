"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";
import CoupleMessage from "@/app/components/CoupleMessage";
import TheCouple from "@/app/components/TheCouple";
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

  //   const TARGET_DATE = new Date("2026-08-30").getTime();
  //       const [timeLeft, setTimeLeft] = useState({
  //           days: 0,
  //           hours: 0,
  //           minutes: 0,
  //           seconds:0,
  //       });

  //       useEffect(() => {
  //           const updateCountdown = () => {
  //               const now = new Date().getTime();
  //               const diff = TARGET_DATE - now;
  //               if (diff <= 0) {
  //                   setTimeLeft({ days: 30, hours: 10, minutes: 30, seconds:30});
  //                   return;
  //               }
  //               const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //               const hours = Math.floor(
  //                   (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //               );
  //               const minutes = Math.floor(
  //                   (diff % (1000 * 60 * 60)) / (1000 * 60)
  //               );

  //              const seconds = Math.floor(
  //     (diff % (1000 * 60)) / 1000
  // );


  //               setTimeLeft({ days, hours, minutes, seconds, });
  //           };

  //           updateCountdown(); // first run
  //           const interval = setInterval(updateCountdown, 60000); // every minute

  //           return () => clearInterval(interval);
  //       }, []);



  const TARGET_DATE = new Date("2026-08-30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
      );

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

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
      <div className=" bg-[url('/assets/bg_mobile.png')] md:bg-[url('/assets/background.webp')] 3xl:bg-[url('/assets/background.webp')]
                      bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden">

        <RoseHeroTemp />

        <div className="pt-22 md:pt-42 lg:pt-70 3xl:pt-90 relative z-10">
          <h2 className="text-[#69301B] text-center leading-tight text-[14px] md:text-2xl lg:text-[52px] pb-0
                          md:pb-40 lg:pb-110 3xl:pb-115 flex flex-col items-center">
            <span className="parisienne-regular">Varun Prasad</span>
            <span className="jacques-francois text-[8px] md:text-2xl lg:text-[28px] tracking-widest">WEDS</span>
            <span className="parisienne-regular">Yuvashri</span>
          </h2>

          <div className="flex flex-col justify-center items-center mt-40 md:mt-40 lg:mt-20 pb-20 lg:pb-60 3xl:mt-52">
            <h2 className="eb-garamond font-medium text-[12px] md:text-xl lg:text-base 3xl:text-[22px] text-center text-[#C26F02]">COUNTDOWN TO OUR BIG DAY</h2>
            <hr className="w-20 md:w-66 lg:w-64 border:0.5  lg:border border-[#C26F02] my-0 md:my-2 lg:my-2 3xl:my-3" />
            <h2 className="eb-garamond font-normal flex text-xs md:text-3xl lg:text-xl text-center text-[#C26F02] gap-3 md:gap-6 lg:gap-12 3xl:gap-14 mt-6 md:mt-0">

              <div><span className="font-bold 3xl:text-4xl md:text-2xl text-[18px]"> {timeLeft.days}</span>
                <p className="3xl:text-[16px] lg:text:[14px] text-[13px]">DAYS </p> </div>
              <div><span className="font-bold 3xl:text-4xl md:text-2xl text-[18px]"> {timeLeft.hours}</span>
                <p className="3xl:text-[16px] lg:text:[14px] text-[13px]">HOURS </p> </div>
              <div><span className="font-bold 3xl:text-4xl md:text-2xl text-[18px]">{timeLeft.minutes}</span>
                <p className="3xl:text-[16px] lg:text:[14px] text-[13px]">MINUTES </p> </div>
              <div><span className="font-bold 3xl:text-4xl md:text-2xl text-[18px]">{timeLeft.seconds}</span>
                <p className="3xl:text-[16px] lg:text:[14px] text-[13px]">SECOND </p> </div>
            </h2>
          </div>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-0 pt-0">
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

            <p className="eb-garamond font-medium text-[#C26F02] text-xs md:text-xl lg:text-[26px] mt-6 md:px-0 px-10">
              With immense pleasure cordially invite you to the auspicious wedding ceremony of
            </p>

            {/* <h2 className="eb-garamond font-medium text-[#C26F02] text-center mt-6 md:mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              Dr. Yuvashri
            </h2>

            <h2 className="eb-garamond font-medium text-[#C26F02] text-center mt-4 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="eb-garamond font-medium text-[#C26F02] text-center lg:mt-10 mt-0 text-xl md:text-3xl lg:text-5xl leading-tight">
                & </span>   <br /> Varun Prasad, <span className="text-xl font-bold">MBA</span>
            </h2> */}

<h2 className="font-Cormorant italic font-medium text-[#C26F02] text-center mt-6 md:mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              Dr. Yuvashri
            </h2>

            <h2 className="font-Cormorant italic font-medium text-[#C26F02] text-center mt-4 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="font-Cormorant italic font-medium text-[#C26F02] text-center lg:mt-10 mt-0 text-xl md:text-3xl lg:text-5xl leading-tight">
                & </span>   <br /> Varun Prasad, <span className="md:text-2xl text-[16px]">MBA</span>
            </h2>


          </div>

        </div>
      </div>

      <CoupleMessage />
      <TheCouple />

      <div className="bg-[url('/assets/footer_bg2.png')] bg-cover bg-no-repeat">
        <div className="h-170 md:h-300 lg:h-550 3xl:h-680 flex flex-col items-center relative">

          <h2 className="parisienne-regular text-2xl md:text-4xl lg:text-[60px] text-center text-[#C26F02] pt-4 md:pt-11 lg:pt-42 3xl:pt-55">The Journey to Forever Begins</h2>
          <p className="eb-garamond font-medium text-xs md:text-[16px] lg:text-[24px] text-[#C26F02] mt-4 text-center px-6 md:px-25 lg:px-65 3xl:px-100">
            A beautiful match made through our families, nurtured with love and understanding. As the countdown begins, we look forward to celebrating the start of our new chapter with your blessings.
          </p>

          <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-8 lg:mt-15">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img src="/assets/invi_insta.png" alt="icon" className="w-5 h-5 md:w-10 md:h-10" /></a>
          </div>
          <p className="eb-garamond font-medium text-xs md:text-xl lg:text-[32px] text-[#C26F02] mt-2 md:mt-5 text-center ">                         © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>

        </div>
      </div>

      {/* <MarriageCountdown /> */}
    </>
  );
}

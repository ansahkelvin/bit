import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function HomeHeader() {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side: Text content */}
          <div className="flex-1 space-y-3">
            <h1 className={`${montserrat.className} text-3xl md:text-3xl lg:text-4xl font-semibold text-[#EDF0FA]`}>
              Just Click To Buy
            </h1>
            <p className="text-base  text-[#6E7693]">
              Using Various Payment Method
            </p>
          </div>

          {/* Right side: Illustration */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
             <Image src="/bit.svg" alt={"Bitcoin"} width={700} height={400} className={'w-full h-full'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

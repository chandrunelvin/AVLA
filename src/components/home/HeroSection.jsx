import { ArrowRight, CloudDownload } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="mx-auto w-full rounded-[20px] bg-[#F6F7F9] pb-[40px] text-center text-[#111111] sm:pb-[112px]">

      {/* Text + buttons */}
      <div className="mx-auto flex flex-col items-center px-5 pt-[52px] sm:px-10 sm:pt-[88px] lg:px-12">
        <h1 className="text-[58px] font-normal leading-[1.05] text-[#111111] sm:text-[56px] sm:leading-[1.18] lg:text-[64px]">
          Premium<br className="sm:hidden" />{' '}
          Seafood<br />
          Exporters<br className="sm:hidden" />{' '}
          Worldwide
        </h1>

        <p className="mt-[22px] max-w-[300px] text-[16px] font-normal leading-[1.6] text-[#838383] sm:mt-[24px] sm:max-w-[500px] sm:text-[16px]">
          Premium marine species exporter delivering fish, cephalopods,
          crustaceans, and bivalves worldwide with quality assurance.
        </p>

        <div className="mt-[28px] mb-[28px] flex flex-row items-center justify-center gap-3 sm:mt-[26px]">
          <button
            type="button"
            className="inline-flex h-[47px] w-[127px] items-center justify-center gap-2 rounded-[95px] bg-[#0161fe] text-[16px] font-normal text-white sm:h-[55px] sm:w-auto sm:min-w-[134px] sm:px-6"
          >
            About Me
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="inline-flex h-[47px] w-[175px] items-center justify-center gap-2 rounded-[95px] border border-[#0161fe] text-[16px] font-normal text-[#0161fe] sm:h-[55px] sm:w-auto sm:min-w-[201px] sm:gap-3 sm:px-6"
          >
            Download Brochure
            <CloudDownload aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Hero image — same for mobile and desktop */}
      <img
        src="/assets/images/home/hero-demo.svg"
        alt="Seafood export demo"
        className="mx-auto mt-[32px] block h-auto w-full max-w-[1006px] rounded-[15px] px-[16px] sm:mt-[82px] sm:px-6 lg:px-12"
        loading="eager"
      />

    </section>
  );
}

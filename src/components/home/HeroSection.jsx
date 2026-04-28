import { ArrowRight, CloudDownload } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1420px] rounded-[20px] bg-[#F6F7F9] px-6 pb-[112px] pt-[88px] text-center text-[#111111] sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-[620px] flex-col items-center">
        <h1 className="text-[44px] font-normal leading-[1.18] text-[#111111] sm:text-[56px]">
          Premium Seafood
          <br />
          Exporters Worldwide
        </h1>

        <p className="mt-[24px] max-w-[500px] text-[16px] font-normal leading-[1.5] text-[#838383]">
          Premium marine species exporter delivering fish, cephalopods,
          crustaceans, and bivalves worldwide with quality assurance.
        </p>

        <div className="mt-[26px] flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="inline-flex h-[55px] min-w-[134px] items-center justify-center gap-2 rounded-full bg-[#0161fe] px-6 text-[16px] font-normal text-white transition hover:brightness-105"
          >
            About Me
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="inline-flex h-[55px] min-w-[201px] items-center justify-center gap-3 rounded-full border border-[#0161fe] px-6 text-[16px] font-normal text-[#0161fe] transition hover:bg-[#0161fe] hover:text-white"
          >
            Download Brochure
            <CloudDownload aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <img
        src="/assets/images/home/hero-demo.svg"
        alt="Seafood export demo"
        className="mx-auto mt-[82px] block h-auto w-full max-w-[1006px] rounded-[15px]"
        loading="eager"
      />
    </section>
  );
}

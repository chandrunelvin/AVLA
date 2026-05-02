import { ArrowRight, CloudDownload } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="mx-auto w-full rounded-[20px] bg-[#F6F7F9] pb-[40px] text-center text-[#111111] sm:pb-[112px]">

      {/* Text + buttons */}
      <div className="mx-auto flex flex-col items-center px-5 pt-[52px] sm:px-10 sm:pt-[88px] lg:px-12">
        <h1 className="text-[72px] font-normal leading-[1.05] text-[#111111] sm:text-[56px] sm:leading-[1.18] lg:text-[64px]">
          Premium<br className="sm:hidden" />{' '}
          Seafood<br />
          Exporters<br className="sm:hidden" />{' '}
          Worldwide
        </h1>

        <p className="mt-[22px] max-w-[300px] text-[14px] font-normal leading-[1.6] text-[#838383] sm:mt-[24px] sm:max-w-[500px] sm:text-[16px]">
          Premium marine species exporter delivering fish, cephalopods,
          crustaceans, and bivalves worldwide with quality assurance.
        </p>

        <div className="mt-[28px] flex flex-row items-center justify-center gap-3 sm:mt-[26px]">
          <button
            type="button"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#0161fe] px-6 text-[15px] font-normal text-white sm:h-[55px] sm:min-w-[134px] sm:text-[16px]"
          >
            About Me
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-[#0161fe] px-5 text-[14px] font-normal text-[#0161fe] sm:h-[55px] sm:min-w-[201px] sm:gap-3 sm:px-6 sm:text-[16px]"
          >
            Download Brochure
            <CloudDownload aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Mobile image */}
      <img
        src="/assets/images/home/hero-mobile-image.png"
        alt="Seafood export"
        className="mx-auto block h-auto w-[85%] max-w-[340px] sm:hidden"
        loading="eager"
      />

      {/* Desktop image */}
      <img
        src="/assets/images/home/hero-demo.svg"
        alt="Seafood export demo"
        className="mx-auto mt-[82px] hidden h-auto w-full max-w-[1006px] rounded-[15px] px-6 sm:block lg:px-12"
        loading="eager"
      />

    </section>
  );
}

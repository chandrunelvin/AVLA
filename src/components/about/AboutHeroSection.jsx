import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-full rounded-[20px] bg-[#F6F7F9] px-[8px] pb-[8px] pt-[48px] text-[#111111] sm:px-8 lg:px-[48px] lg:pb-[48px] lg:pt-[64px]">

      {/* Heading + subtitle + buttons */}
      <div className="mx-auto flex max-w-[809px] flex-col items-center text-center">
        <h1 className="text-[46px] font-normal leading-[1.1] text-[#111111] sm:text-[52px] lg:text-[58px]">
          Expert guidance, tailored solution
        </h1>

        <p className="mt-[18px] max-w-[300px] text-[14px] font-normal leading-[1.65] text-[#838383] sm:max-w-[480px] sm:text-[16px]">
          Adapt easily and scale confidently with a flexible system designed to
          support your business at every stage of growth.
        </p>

        <div className="mt-[28px] flex flex-nowrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex h-[52px] min-w-[130px] items-center justify-center gap-2 rounded-full bg-[#0161fe] px-7 text-[16px] font-normal text-white"
          >
            Contact
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>

          <a
            href="https://wa.me/917736782999"
            className="inline-flex h-[52px] min-w-[148px] items-center justify-center gap-[10px] rounded-full bg-[#25D366] px-7 text-[15px] font-bold text-white"
          >
            <img
              src="/assets/images/project/whatsapp-icon.svg"
              alt=""
              aria-hidden="true"
              className="h-[22px] w-[22px] brightness-[10]"
            />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile: 2×2 card grid */}
      <div className="mt-[32px] grid grid-cols-2 gap-[10px] lg:hidden">

        {/* Top-left: gray image card */}
        <div className="min-h-[190px] overflow-hidden rounded-[18px] bg-[#CDCED0]">
          <img
            src="/assets/images/about/about-seafood-wide.svg"
            alt="Seafood processing"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Top-right: blue card */}
        <div className="flex min-h-[190px] flex-col justify-between rounded-[18px] bg-[#0161FE] px-[16px] py-[18px] text-white">
          <p className="text-[12px] font-normal leading-[1.6] text-white">
            Buyer satisfaction built on reliable supply, accurate grading,
            customized packing, and strict adherence to international seafood
            export standards.
          </p>
          <p className="text-[44px] font-normal leading-[1.1]">95%</p>
        </div>

        {/* Bottom-left: dark card */}
        <div className="flex min-h-[190px] flex-col rounded-[18px] bg-[#222222] px-[16px] py-[18px] text-white">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/20">
            <img
              src="/assets/images/home/idea-icon.png"
              alt=""
              aria-hidden="true"
              className="h-[16px] w-[16px]"
              loading="lazy"
            />
          </div>
          <p className="mt-[16px] text-[44px] font-normal leading-[1.1]">3+</p>
          <p className="mt-[8px] text-[12px] font-normal leading-[1.6] text-white">
            15+ years seafood processing and exports, delivering certified
            quality since 2010.
          </p>
        </div>

        {/* Bottom-right: gray image card */}
        <div className="min-h-[190px] overflow-hidden rounded-[18px] bg-[#CDCED0]">
          <img
            src="/assets/images/about/about-seafood-box-1.svg"
            alt="Seafood export"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

      </div>

      {/* Desktop: 3-column layout */}
      <div className="mt-[48px] hidden grid-cols-3 gap-[10px] lg:grid">

        {/* Left gray image card */}
        <div className="overflow-hidden rounded-[22px] bg-[#CDCED0] lg:min-h-[560px]">
          <img
            src="/assets/images/about/about-seafood-wide.svg"
            alt="Seafood processing"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Middle: two stacked info cards */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex min-h-[272px] flex-col justify-between rounded-[22px] bg-[#0161FE] px-[22px] py-[22px] text-white">
            <p className="max-w-[320px] text-[15px] font-normal leading-[1.6]">
              Buyer satisfaction built on reliable supply, accurate grading,
              customized packing, and strict adherence to international seafood
              export standards.
            </p>
            <p className="text-[50px] font-normal leading-[1.1]">95%</p>
          </div>

          <div className="flex min-h-[272px] flex-col rounded-[22px] bg-[#222222] px-[22px] py-[22px] text-white">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/20">
              <img
                src="/assets/images/home/idea-icon.png"
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                loading="lazy"
              />
            </div>
            <p className="mt-[24px] text-[50px] font-normal leading-[1.1]">3+</p>
            <p className="mt-[14px] text-[15px] font-normal leading-[1.6] text-white/80">
              Years of proven experience in seafood processing and exports,
              delivering consistent quality through certified systems and
              skilled operations since 2010.
            </p>
          </div>
        </div>

        {/* Right gray image card */}
        <div className="overflow-hidden rounded-[22px] bg-[#CDCED0] lg:min-h-[560px]">
          <img
            src="/assets/images/about/about-seafood-box-1.svg"
            alt="Seafood export"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
